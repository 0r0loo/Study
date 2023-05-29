// Extract Type

// Exclude<Type, ExcludedUnion>
type stringOnly = Exclude<string | boolean | number, string>

type functionOnly = Exclude<string | (() => void), Function>
