import createContentType from "../helper";

const postSchema = createContentType({
  name: "post",
  title: "Post",
  fields: [],
});

export default postSchema;
