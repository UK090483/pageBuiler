export const embedQuery = `
_type=='embed'=>{
    _type,
    _key,
    html,
},
`;

export type embedQueryResult = {
  html?: string;
};
