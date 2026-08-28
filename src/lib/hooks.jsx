import { createContext, useContext, useEffect, useRef, useState } from "react";

export const breakpoints = { sm: 640, md: 768, lg: 1024, xl: 1280 };

export const mobileQuery = "(max-width: 767px)";
export const tabletQuery = "(max-width: 1023px)";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    setMatches(mql.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

const ResponsiveContext = createContext({ isMobile: false, isTablet: false });

export function ResponsiveProvider({ children }) {
  const isMobile = useMediaQuery(mobileQuery);
  const isTablet = useMediaQuery(tabletQuery);
  return (
    <ResponsiveContext.Provider value={{ isMobile, isTablet }}>
      {children}
    </ResponsiveContext.Provider>
  );
}

export function useResponsive() {
  return useContext(ResponsiveContext);
}

// Motion-compatible useInView (simple version)
export function useInViewSimple(ref, { root = null, margin = "0px", amount = "some", once = false } = {}) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref?.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (once && entry.isIntersecting) observer.disconnect();
      },
      {
        root,
        rootMargin: margin,
        threshold: amount === "all" ? 1 : 0,
      }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, root, margin, amount, once]);

  return inView;
}

// Focus trap used by modal / mobile menu
export function useFocusTrap(open, containerRef) {
  useEffect(() => {
    if (!open || !containerRef.current) return;
    const container = containerRef.current;
    const previouslyFocused = document.activeElement;

    const focusable = () =>
      container.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );

    const first = () => focusable()[0];
    const last = () => focusable()[focusable().length - 1];

    const onKeyDown = (e) => {
      if (e.key !== "Tab") return;
      const items = focusable();
      if (items.length === 0) return;
      const firstEl = items[0];
      const lastEl = items[items.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === firstEl || !container.contains(document.activeElement)) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    requestAnimationFrame(() => first()?.focus());

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      if (previouslyFocused && document.contains(previouslyFocused)) {
        previouslyFocused.focus();
      }
    };
  }, [open, containerRef]);
}

// Global Lenis instance registry for scrollTo
const lenisRef = { current: null };

export function setLenis(lenis) {
  lenisRef.current = lenis;
}

export function getLenis() {
  return lenisRef.current;
}

export function scrollToSection(el, offset = -64) {
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(el, { offset });
  } else if (el) {
    el.scrollIntoView();
  }
}
