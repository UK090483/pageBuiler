import { componentStyleResult } from "../componentStyle";

export type sectionType = {
  _type: string;
  _key: string;
  title?: string;
  textDirection?: "left" | "center" | "right";
} & componentStyleResult;
