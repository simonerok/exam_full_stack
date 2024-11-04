import React from 'react';

interface Props {
  text: string;
  fontSize?: "small" | "medium" | "large" | "larger"; // Add fontSize prop
}

const ButtonUnderscore = ({ text, fontSize = "medium" }: Props) => {
  // Map fontSize prop to Tailwind CSS classes
  const fontSizeClass = {
    small: "text-txt_small",
    medium: "text-txt_medium",
    large: "text-txt_large",
    larger: "text-txt_larger",
  }[fontSize];

  return (
    <button className="animated-button flex items-center space-x-2">
      <span className={fontSizeClass}>{text}</span>
    </button>
  );
};

export default ButtonUnderscore;