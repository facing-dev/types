export type Overwrite<TARGET, SOURCE> = SOURCE & Pick<TARGET, Exclude<keyof TARGET, keyof SOURCE>>

export type UnionToIntersection<U> =
    (
        U extends any ? (x: U) => void :
        never
    ) extends ((x: infer I) => void) ? I :
    never

export type Assert<TARGET extends RULE, RULE = true> = TARGET

// https://stackoverflow.com/a/53808212/5584191
export type IfEquals<T, U, Y = true, N = false> =
    (<G>() => G extends T ? 1 : 2) extends
    (<G>() => G extends U ? 1 : 2) ? Y : N;
