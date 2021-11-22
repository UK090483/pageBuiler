import React from "react";

interface ContainerProps {
  className?: string;
  size?: "small" | "medium" | "large";
}

export const Container: React.FC<ContainerProps> = ({
  className,
  children,
  size,
}) => {
  return (
    <div
      className={` mx-auto ${
        size === "small" ? "max-w-6xl" : "max-w-6xl"
      }  ${className}`}
    >
      {children}
    </div>
  );
};
