import React from "react";

const SplashImage = () => {
  return (
    <div className="relative flex items-center justify-center h-80 bg-bg_darker">
      <img
        src="/splash.avif"
        alt="Splash Image"
        className="object-cover w-full h-full opacity-75"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-dark_text bg-opacity-50">
        <h1 className="text-5xl font-bold text-light_text text-center">Welcome to My Portfolio</h1>
      </div>
    </div>
  );
};

export default SplashImage;
