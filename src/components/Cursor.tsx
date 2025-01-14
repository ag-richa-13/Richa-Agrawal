// import React, { useEffect, useState } from "react";

// const Cursor: React.FC = () => {
//   const [cursorSize, setCursorSize] = useState(20); // Default size of the cursor
//   const [trailSize, setTrailSize] = useState(8); // Size of the trail dot

//   useEffect(() => {
//     const cursor = document.createElement("div");
//     cursor.classList.add("custom-cursor");
//     document.body.appendChild(cursor);

//     const cursorTrail = document.createElement("div");
//     cursorTrail.classList.add("custom-cursor-trail");
//     document.body.appendChild(cursorTrail);

//     let lastX = 0;
//     let lastY = 0;
//     let trailX = 0;
//     let trailY = 0;
//     let mouseX = 0;
//     let mouseY = 0;

//     const mouseMove = (e: MouseEvent) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;

//       // Move the main cursor
//       cursor.style.left = `${mouseX}px`;
//       cursor.style.top = `${mouseY}px`;

//       // Adjust trail position with smoothness
//       trailX += (mouseX - trailX) / 8;
//       trailY += (mouseY - trailY) / 8;
//       cursorTrail.style.left = `${trailX}px`;
//       cursorTrail.style.top = `${trailY}px`;

//       // Change cursor size when hovering over links, buttons, etc.
//       const hoveredElement = document.elementFromPoint(mouseX, mouseY);
//       if (
//         hoveredElement &&
//         (hoveredElement.tagName === "A" || hoveredElement.tagName === "BUTTON")
//       ) {
//         setCursorSize(35); // Enlarge cursor when hovering over links or buttons
//         setTrailSize(12); // Enlarge trail size
//       } else {
//         setCursorSize(20); // Default cursor size
//         setTrailSize(8); // Default trail size
//       }
//     };

//     const handleMouseEnter = () => {
//       cursor.classList.add("cursor-hover");
//     };

//     const handleMouseLeave = () => {
//       cursor.classList.remove("cursor-hover");
//     };

//     document.querySelectorAll("a, button").forEach((el) => {
//       el.addEventListener("mouseenter", handleMouseEnter);
//       el.addEventListener("mouseleave", handleMouseLeave);
//     });

//     window.addEventListener("mousemove", mouseMove);

//     // Cleanup on component unmount
//     return () => {
//       window.removeEventListener("mousemove", mouseMove);
//       document.querySelectorAll("a, button").forEach((el) => {
//         el.removeEventListener("mouseenter", handleMouseEnter);
//         el.removeEventListener("mouseleave", handleMouseLeave);
//       });
//       document.body.removeChild(cursor);
//       document.body.removeChild(cursorTrail);
//     };
//   }, []);

//   return null;
// };

// export default Cursor;
