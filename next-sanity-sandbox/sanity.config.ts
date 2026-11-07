import type { Config } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config: Config = {
  title: "NextJS Sanity Studio",
  projectId: "rpmoy997",
  dataset: "production",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas},
};
export default config;