import { RefElmType } from "./_common"

// 
export type RefMainVideoType = RefElmType<HTMLDivElement>
export type RefVideoType = RefElmType<HTMLVideoElement>

//
export type handleChangeVolumeType = ({
  new_volume
}: {
  new_volume: number
}) => void

//
export type handleChangeTimeType = ({ new_c_time }: { new_c_time: number }) => void
