import React, { useEffect, useState } from "react";
import { imageBuilder } from "lib/sanity";
import Image from "next/image";

export default function LandingPageImages({ artPieces }) {
  const [image, setImage] = useState([artPieces[2]]);
  const random = Math.floor(Math.random() * artPieces.length);

  useEffect(() => {
    random > 1
      ? setImage([artPieces[random]])
      : setImage([artPieces[0], artPieces[1]]);
  }, []);

  const imageStyle = {
    height: "100vh",
    width: "100%",
    position: "relative",
  };

  const dualImages = {
    height: "100vh",
    width: "50%",
    position: "relative",
  };

  return (
    <article style={{ zIndex: 0 }} className="sticky top-0 z-0">
      {image.length < 2 ? (
        <div style={imageStyle}>
          <Image
            src={imageBuilder(image[0]).url()}
            alt="Adam Finkelston's landing page image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      ) : (
        <div className="flex">
          <div style={dualImages}>
            <Image
              alt="Mountains"
              src={imageBuilder(image[1]).url()}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div style={dualImages}>
            <Image
              alt="Mountains"
              src={imageBuilder(image[0]).url()}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </div>
      )}
    </article>
  );
}
