export const toBinString = (bytes: Uint8Array) =>
  bytes.reduce(
    (str: any, byte: number) => str + byte.toString(2).padStart(8, "0"),
    ""
  );
