import { componentStyleProjection } from "../componentHelper";

const sectionQuery = () => `
title,
textDirection,
${componentStyleProjection}
`;

export { sectionQuery };
