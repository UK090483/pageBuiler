import { ComponentType } from "react";

type Component =
  | { name: string; component: ComponentType<any>; type: "root"; query: string }
  | {
      name: string;
      component: ComponentType<any>;
      type: "normal" | "plug";
      query?: string;
    };

class BlockFactory {
  private static instance: BlockFactory;

  components: { [k: string]: Component } = {};

  public registerComponent(name: string, props: Component) {
    this.components[name] = props;
  }

  public registerComponents(components: Component[]) {
    components.forEach((c) => this.registerComponent(c.name, c));
  }

  public getComponent(name: string, props: any) {
    const C = this.components[name]?.component;
    return C ? <C {...props} /> : null;
  }

  public getRootQuery() {
    return this.getRootElements()
      .map((c) => c.query)
      .join(" , ");
  }

  public getRootElements() {
    return Object.values(this.components).filter((c) => c.type === "root");
  }

  public static getInstance(): BlockFactory {
    if (!BlockFactory.instance) {
      BlockFactory.instance = new BlockFactory();
    }

    return BlockFactory.instance;
  }
}

export const blockFactory = BlockFactory.getInstance();

export default BlockFactory;
