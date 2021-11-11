import React from "react";

interface StackProps {}

const Stack: React.FC<StackProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Stack;
