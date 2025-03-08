import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

export const useEmblaSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return {
    emblaRef,
    scrollNext,
    scrollPrev
  }
}