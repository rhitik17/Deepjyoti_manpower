import React, { useState, useEffect, useRef } from "react";
import ChairmanWords from "./ChairmanWords";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import { carouselData } from "../../data/carouseldata";

function Slider() {
  const galleryRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);
  const autoplay = useRef(Autoplay({ delay: 2000 }));

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
    });

    return () => clearInterval(interval);
  }, [itemWidth]); // Re-run when the itemWidth changes

  return (
    <>
      <Carousel
        withIndicators
        withControls
        classNames={{ controls: "-mx-[20px] md:-mx-[40px] xl:-mx-[60px] " }}
        height="fit"
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        
      >
        {carouselData?.map((item, id) => (
          <CarouselSlide key={id} >
            <ChairmanWords data={item} />
          </CarouselSlide>
        ))}

        {/* ...other slides */}
      </Carousel>
    </>
  );
}

export default Slider;
