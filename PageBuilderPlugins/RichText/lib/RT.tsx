import { PortableText } from "@portabletext/react";

interface ISanityRichTextProps {
  marks?: Record<string, (props: any) => JSX.Element | null>;
  plugs?: Record<string, React.ComponentType<any>>;
  content: any[];

  list?: React.ReactNode;
  listItem?: React.Component;

  dataset?: string;
  projectId?: string;
}

const RichText: React.FC<ISanityRichTextProps> = (props) => {
  return <PortableText value={props.content} components={{ marks: {} }} />;
};

export default RichText;
