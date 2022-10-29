import { componentStyleResult } from "../componentHelper";

export type sectionType = {
  _type: string;
  _key: string;
  title?: string;
  textDirection?: "left" | "center" | "right";
} & componentStyleResult;
