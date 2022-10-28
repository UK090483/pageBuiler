import { componentStyleResult } from "../componentHelper";

export type sectionType = {
  title?: string;
  textDirection?: "left" | "center" | "right";
} & componentStyleResult;
