import { common_types } from 'react-commons-ts';
import { RefElmType } from './_common';

//
export type RefMainVideoType = RefElmType<HTMLDivElement>;
export type RefVideoType = RefElmType<HTMLVideoElement>;

//
export type handleChangeVolumeType = ({
    new_volume
}: {
    new_volume: number;
}) => void;

//
export type handleChangeTimeType = ({
    new_c_time
}: {
    new_c_time: number;
}) => void;

// settings
export type refBtnSettingType = common_types.RefElmType<HTMLDivElement>;
export type settingsPageType = 'home' | 'speed' | 'subtitle';
export type handleSettingDetailType = (setting_name: settingsPageType) => void;

// speed
export type handleChangeSpeedType = (speed: number) => void;
export type speedObjType = { speed: number; title: string };
export type speedPageType = 'choice' | 'custom';
