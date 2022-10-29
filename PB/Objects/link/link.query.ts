type linkQueryProps = {
  slugQuery: string;
};

const linkProjection = ({ slugQuery }: linkQueryProps) => `
...(internal->{ 'internal':${slugQuery}}),
href,
`;

export { linkProjection };
