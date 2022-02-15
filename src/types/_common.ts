// REF
export type UseRefType<T> = React.MutableRefObject<T>
export type RefElmType<T> = UseRefType<null | T>

export type RefDivElmType = RefElmType<HTMLDivElement>

// MOUSE
export type MouseEventType = MouseEvent | TouchEvent
export type ReactMouseEventType<T> = React.MouseEvent<T> | React.TouchEvent<T>

export type MouseFuncType = (e: MouseEventType) => void
export type ReactMouseFuncType<T> = (e: ReactMouseEventType<T>) => void
