import React from "react";
import { Card } from "./Card";

import { Grid } from "./Grid";

interface ListProps {}

const List: React.FC<ListProps> = () => {
  return (
    <Grid>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  );
};

export default List;
