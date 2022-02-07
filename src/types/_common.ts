// REF
export type UseRefType<T> = React.MutableRefObject<T>
export type RefElmType<T> = UseRefType<null | T>

export type RefDivElmType = RefElmType<HTMLDivElement>

// MOUSE
export type MouseEventType = MouseEvent | TouchEvent
export type ReactMouseEventType = React.MouseEvent | React.TouchEvent | MouseEventType

export type MouseFuncType = (e: MouseEventType) => void
export type ReactMouseFuncType = (e: ReactMouseEventType) => void
