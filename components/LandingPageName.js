import React from "react";

export default function LandingPageName({ color, name }) {
  const nameStyle = {
    color: color,
  };

  return (
    <div
      style={nameStyle}
      className="absolute text-4xl tracking-widest font-black -top-48 mt-32 uppercase left-72 hover:opacity-70 cursor-pointer"
    >
      {name}
    </div>
  );
}
