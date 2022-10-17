// type HookFn<P = unknown, R = unknown> = (params: P) => R;

type HookQueue = { [k: HookName]: HookFn[] };
type HookName = string;

type HookFn = Function;

class Hooks {
  private readonly subscribers: HookQueue;

  constructor() {
    this.subscribers = [] as unknown as HookQueue;
  }

  add(channel: HookName, callback: HookFn) {
    if (!Array.isArray(this.subscribers[channel])) {
      this.subscribers[channel] = [];
    }

    this.subscribers[channel].push(callback);
  }

  call(channel: HookName, payload: any) {
    if (!Array.isArray(this.subscribers[channel])) {
      return;
    }

    this.subscribers[channel].forEach((callback: HookFn) => callback(payload));
  }
}

const ReadyHooks = new Hooks();

export default ReadyHooks;
