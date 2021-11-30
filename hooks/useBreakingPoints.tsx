import React from "react";
import { createBreakpoint, useUpdateEffect } from "react-use";

// import resolveConfig from "tailwindcss/resolveConfig";
// import tailwindConfig from "../tailwind.config";

// const fullConfig = resolveConfig(tailwindConfig);

export const BreakingPoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

const useBreakingPoints = createBreakpoint(BreakingPoints);

export default useBreakingPoints;
