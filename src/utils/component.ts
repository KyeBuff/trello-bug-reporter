import { define } from "hybrids";

interface ComponentI {
  tag: string;
  name?: string;
  value?: string;
}

const component = (props: ComponentI) => {
  return (render: any) => {
    return {
      create: () =>
        define({
          ...props,
          render,
        }),
    };
  };
};

export default component;
