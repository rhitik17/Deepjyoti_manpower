import React, { useState, useEffect, useRef } from "react";
import ChairmanWords from "./ChairmanWords"; // Import the ChairmanWords component

const data = [
  {
    id: 1,
    image: "/images/businessWomen.png", // Update this image path as needed
    quote: "Our success comes from building relationships, not just making placements. Every connection we create is built on trust, integrity, and a deep understanding of our clients’ and candidates’ needs.",
    name: "Nur Mohommad",
    title: "Founder"
  },
  {
    id: 2,
    image: "/images/businessWomen.png", // Use a different image for the second set
    quote: "Our commitment is to excellence, and we believe in making a meaningful impact with every interaction. Our aim is to build lasting partnerships that drive success.",
    name: "John Doe",
    title: "CEO"
  },
  {
    id: 3,
    image: "/images/businessWomen.png", // Another image for the third set
    quote: "Innovation and adaptability are at the heart of our business. We always strive to stay ahead of the curve, providing solutions that benefit both our clients and candidates.",
    name: "Sarah Lee",
    title: "Managing Director"
  }
];

function Slider() {
  const galleryRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);

  // Set item width dynamically
  useEffect(() => {
    const firstItem = galleryRef.current?.firstChild;
    if (firstItem) {
      setItemWidth(firstItem.offsetWidth); // Get the width of the first item
    }

    // Scroll the gallery images automatically every 3 seconds
    const interval = setInterval(() => {
      if (galleryRef.current) {
        galleryRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });

        // Reset scroll position when it reaches the end
        if (
          galleryRef.current.scrollLeft >=
          galleryRef.current.scrollWidth - galleryRef.current.clientWidth
        ) {
          galleryRef.current.scrollLeft = 0;
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [itemWidth]); // Re-run when the itemWidth changes

  return (
    <div className="w-full bg-primary-web overflow-hidden">
      <div
        ref={galleryRef}
        className="flex space-x-4 w-full scrollbar-hide"
        style={{ scrollBehavior: "smooth", overflowX: "auto" }}
      >
        {data.map(({ id, image, quote, name, title }) => (
          <div key={id} className="min-w-full bg-primary-web">
            <ChairmanWords image={image} quote={quote} name={name} title={title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
