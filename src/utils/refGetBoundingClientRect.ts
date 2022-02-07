import { divElm } from '../initial/elm'
//
import { RefElmType } from '../types/_common'

//
export function refGetBoundingClientRect(ref_elm: RefElmType<HTMLElement>) {
  return (ref_elm.current ? ref_elm.current : divElm).getBoundingClientRect()
}
