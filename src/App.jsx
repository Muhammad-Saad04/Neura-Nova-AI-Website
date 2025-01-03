import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Loader from "./loader/Loader";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    // Simulate content loading (replace with actual loading logic)
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Adjust time as needed

    return () => clearTimeout(timer); // Clear timeout on unmount
  }, []);

  useEffect(() => {
    if (isLoaded && scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      return () => {
        scroll.destroy(); // Clean up Locomotive Scroll instance on unmount
      };
    }
  }, [isLoaded]);

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <div ref={scrollRef} data-scroll-container>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
