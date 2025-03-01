import { atom } from 'recoil'

export const currentTrackIdState = atom({
  key: 'currentTrackIdState', //unique Id (with respectto other atoms /selectors)
  default: null, //defalut value (aka initial value)
})

export const isPlayingState = atom({
  key: 'isPlayingState',
  default: false,
})
