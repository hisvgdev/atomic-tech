import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

export const useEmblaSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [isDragging, setIsDragging] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onPointerDown = () => setIsDragging(true);
    const onPointerUpOrSelect = () => setIsDragging(false);

    emblaApi.on("pointerDown", onPointerDown);
    emblaApi.on("pointerUp", onPointerUpOrSelect);
    emblaApi.on("select", onPointerUpOrSelect);

    return () => {
      emblaApi.off("pointerDown", onPointerDown);
      emblaApi.off("pointerUp", onPointerUpOrSelect);
      emblaApi.off("select", onPointerUpOrSelect);
    };
  }, [emblaApi]);

  return {
    emblaRef,
    scrollNext,
    scrollPrev,
    isDragging
  };
};
