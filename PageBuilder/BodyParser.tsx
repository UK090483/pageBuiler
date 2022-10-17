import React, { ComponentType } from "react";
import { usePageBuilderContext } from "./PageBuilderContext";

export type BodyParserProps = {
  components: { [k: string]: { component: ComponentType<any> } };
};

const BodyParser: React.FC<BodyParserProps> = ({ components }) => {
  const { data } = usePageBuilderContext();

  return (
    <>
      {data?.body &&
        data.body.map((block) => {
          if (components[block._type]) {
            const Component = components[block._type].component;
            return <Component key={block._key} {...block} />;
          }
          return (
            <div key={block._key}>
              Component {JSON.stringify(block._type)} is not defined. Add it to
              components.js
            </div>
          );
        })}
    </>
  );
};

export default BodyParser;
