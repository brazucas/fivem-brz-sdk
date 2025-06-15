export const getAdapter = <K, T>(
  adapters: { [key: string]: T },
  adapter: string
): T => {
  if (!adapters[adapter])
    throw new Error(
      `FATAL: ${adapter} is not supported, please check the documentation for supported inventory systems`
    );

  return adapters[adapter] as T;
};

export type QSInventoryItem = {
  label: string;
  consume: boolean;
  stack: boolean;
  weight: number;
  client: {
    image: string;
  };
};
