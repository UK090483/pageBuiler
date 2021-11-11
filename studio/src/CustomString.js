/* eslint-disable react/display-name */
// /src/MyCustomString.js

import React from "react";
import { withDocument } from "part:@sanity/form-builder";
// Import UI components from Sanity UI
import { TextInput, Stack, Label } from "@sanity/ui";

export const MyCustomString = React.forwardRef((props, ref) => {
  console.log(props);
  return (
    <Stack space={2}>
      <Label>{props.type.title}</Label>
      <TextInput ref={ref} value={props.value} />
    </Stack>
  );
});

// Create the default export to import into our schema
export default withDocument(MyCustomString);
