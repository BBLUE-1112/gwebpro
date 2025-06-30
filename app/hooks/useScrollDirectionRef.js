// "use client";
// // // useScrollDirection.js (Custom Hook)
// import { useState, useEffect } from "react";

// const useScrollDirection = (threshold = 100, isPaused = false) => {
//   const [scrollDirection, setScrollDirection] = useState("up");
//   const [lastScrollY, setLastScrollY] = useState(window.scrollY);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       if (isPaused) return;
//       if (currentScrollY > threshold) {
//         setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
//       } else {
//         setScrollDirection("up");
//       }
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY, threshold, isPaused]);

//   return scrollDirection;
// };
// export default useScrollDirection;
"use client";
import { useRef, useEffect } from "react";

const useScrollDirectionRef = (threshold = 100, isPaused = false) => {
  const scrollDirection = useRef("up");
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (isPaused) return;

      if (currentScrollY > threshold) {
        scrollDirection.current =
          currentScrollY > lastScrollY.current ? "down" : "up";
      } else {
        scrollDirection.current = "up";
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, isPaused]);

  return scrollDirection;
};

export default useScrollDirectionRef;
