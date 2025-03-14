console.log("Setting up Flip animation");
import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export function Slider({
  handleImageClick,
}: {
  handleImageClick: (e: React.MouseEvent<HTMLImageElement>) => void;
}) {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3,
      spacing: 15,
    },
  });

  const pictures = [
    "https://picsum.photos/id/233/500/300",
    "https://picsum.photos/id/232/500/300",
    "https://picsum.photos/id/211/500/300",
    "https://picsum.photos/id/213/500/300",
    "https://picsum.photos/id/234/500/300",
  ];
  return (
    <div ref={ref} className="keen-slider bg-slate-600">
      {pictures.map((picture, index) => {
        return (
          <div data-wrapper={index} key={index} className="keen-slider__slide">
            <img
              onClick={handleImageClick}
              data-img={index}
              className="h-full object-cover"
              src={picture}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
}
