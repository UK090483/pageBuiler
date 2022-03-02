const eventPlugQuery = `
  _type == "eventPlug" => {
   'items': *[_type == 'event' && references(^.includeTags[]._ref) ] | order(eventItems[0].startDate asc)[] {...}
  }
  `;
export default eventPlugQuery;
