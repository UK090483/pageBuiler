export const embedQuery = `
_type=='embed'=>{
    html,
},
`;

export type embedQueryResult = {
  html?: string;
};
