/* eslint-disable @next/next/no-html-link-for-pages */
import * as React from "react";

const PreviewIndicator: React.FC = () => {
  return (
    <a
      className="fixed p-3 font-bold border-4 rounded-md border-red text-red left-2 bottom-2"
      href="/api/exit-preview"
    >
      Exit Preview
    </a>
  );
};

export default PreviewIndicator;
