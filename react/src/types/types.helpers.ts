export type ExtractArrayValueType<T> = T extends Array<infer U> ? U : never;
