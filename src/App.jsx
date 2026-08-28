import { lazy, Suspense, Component } from "react";
import ReactLenis from "lenis/react";
import { ResponsiveProvider } from "./lib/hooks";
import Preloader from "./components/Preloader.jsx";
import ScrollProgressBar from "./components/ScrollProgressBar.jsx";
import Background from "./components/Background.jsx";
import KeyboardNav from "./components/KeyboardNav.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import VisitsBadge from "./components/VisitsBadge.jsx";

const About = lazy(() => import("./sections/About.jsx"));
const Experience = lazy(() => import("./sections/Experience.jsx"));
const Education = lazy(() => import("./sections/Education.jsx"));
const Skills = lazy(() => import("./sections/Skills.jsx"));
const Portfolio = lazy(() => import("./sections/Portfolio.jsx"));
const Services = lazy(() => import("./sections/Services.jsx"));
const Contact = lazy(() => import("./sections/Contact.jsx"));

const sectionStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "30vh",
};

function LoadingSpinner() {
  return (
    <div style={sectionStyle} role="status" aria-label="Loading section">
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "2px solid rgba(96,165,250,0.2)",
          borderTopColor: "#60a5fa",
          animation: "spin 1s linear infinite",
        }}
      />
    </div>
  );
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, textAlign: "center", padding: 24 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700 }}>Something went wrong</h1>
          <p style={{ color: "#9ca9b0" }}>An unexpected error occurred while rendering the page.</p>
          <button
            className="btn-primary"
            onClick={() => window.location.reload()}
          >
            Refresh
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, wheelMultiplier: 1.1, touchMultiplier: 1.5, syncTouch: false }}>
      <ResponsiveProvider>
        <ErrorBoundary>
          <Preloader />
          <ScrollProgressBar />
          <Background />
          <KeyboardNav />
          <div className="relative min-h-screen">
            <a className="skip-link" href="#main-content">
              Skip to content
            </a>
            <Navbar />
            <main id="main-content" tabIndex={-1}>
              <Hero />
              <Suspense fallback={<LoadingSpinner />}>
                <div className="section-darker">
                  <About />
                </div>
                <div className="section-dark">
                  <Experience />
                </div>
                <div className="section-darker">
                  <Education />
                </div>
                <div className="section-dark">
                  <Skills />
                </div>
                <div className="section-darker" id="projects">
                  <Portfolio />
                </div>
                <div className="section-darker" id="services">
                  <Services />
                </div>
                <div className="section-darker" id="contact">
                  <Contact />
                </div>
              </Suspense>
            </main>
            <Footer />
            <BackToTop />
            <VisitsBadge />
          </div>
        </ErrorBoundary>
      </ResponsiveProvider>
    </ReactLenis>
  );
}
