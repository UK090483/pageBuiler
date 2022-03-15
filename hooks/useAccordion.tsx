import React, { useRef } from "react";
type UseAccordion = () => { outerProps: {}; innerProps: {} };

const useAccordion = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);
  const [height, setHeight] = React.useState(0);
  const close = () => setOpen(true);
  const toggle = () => setOpen((i) => !i);

  React.useEffect(() => {
    if (open && ref.current) {
      const { height } = ref.current.getBoundingClientRect();
      return setHeight(height);
    }
    return setHeight(0);
  }, [open]);

  return {
    open,
    close,
    toggle,
    maxHeight: height,
    ref,
  };
};

export default useAccordion;
