"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Flip, useGSAP);

const images = [
  "https://picsum.photos/id/28/400/400",
  "https://picsum.photos/id/29/400/400",
];

export const Flip1 = () => {
  const flipInstance = useRef();

  const clickHandler = () => {
    const { current } = flipInstance;
    console.log("Click handler - flipInstance:", current);

    current && current.reversed(!current.reversed());
  };

  useGSAP(
    () => {
      const small = document.querySelector(".original img");

      const large = document.querySelector(".inside img");

      console.log(small, large);

      checkImagesLoaded([small, large]).then(() => {
        console.log("images loaded");
        flipInstance.current = Flip.fit(small, large, {
          duration: 1,
          ease: "power1.inOut",
        }).reverse();
      });

      console.log("Setting up Flip animation");

      flipInstance.current = Flip.fit(".original img", ".inside img", {
        duration: 1,
        ease: "power1.inOut",
      }).reverse();
    },
    { dependencies: [] }
  );

  const checkImagesLoaded = (images) => {
    const imagePromises = images.map((img, index) => {
      if (img.complete) return Promise.resolve();

      return new Promise((resolve) => {
        img.addEventListener(
          "load",
          () => {
            console.log(`Image ${index} loaded`);
            resolve(true);
          },
          { once: true }
        );
        img.addEventListener("error", () => resolve(true), { once: true });
      });
    });

    return Promise.all(imagePromises);
  };

  return (
    <>
      <div className="original">
        <img src={images[0]} alt="" onClick={clickHandler} />
      </div>
      <div className="slider">
        <div className="inside">
          <img src={images[1]} alt="" />
        </div>
      </div>
    </>
  );
};
