import React from "react";
import { Card } from "./Card";
import { FactsCard } from "./FactsCard";
import { Grid } from "./Grid";

interface ListProps {}

const dummyFacts = [
  {
    header: "Schon gewusst?",
    text: "H&M hat keine eigenen Fabriken und zahlt daher nicht die Löhne der Textilarbeiter*innen. Trotzdem setzen wir uns dafür ein, dass Löhne in den Produktionsländern steigen - denn auch ein Mindestlohn ist nicht immer ausreichend.",
  },
  {
    header: "Schon gewusst?",
    text: "Die Zahlung des örtlichen Mindestlohns ist eines der Mindestkriterien, die Lieferant*innen erfüllen müssen, um mit H&M zusammen zu arbeiten. Tatsächlich liegt der durchschnittliche Lohn in den Fabriken unserer Lieferant*innen oft deutlich über dem Mindestlohn des jeweiligen Landes.",
  },
  {
    header: "Schon gewusst?",
    text: "Der Preis deines Kleidungsstücks sagt nicht direkt etwas über das Gehalt der Textilarbeiter*innen aus. Es ist üblich, dass die gleiche Fabrik für verschiedene Marken aus unterschiedlichen Preissegmenten produziert. Das Gehalt der Textilarbeiter*innen bleibt gleich.",
  },
];

const List: React.FC<ListProps> = () => {
  return (
    <Grid>
      <Card />
      <Card />
      <FactsCard items={dummyFacts} category="Kinderrechte" />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  );
};

export default List;
