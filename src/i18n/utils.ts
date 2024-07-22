import {en} from './en'
import {zhCn} from './zhCn'
import {cs} from './cs'
import {ja} from './ja'
import {config} from "../consts";

const ui = {
  en,
  zhCn,
  ja,
  cs
}


export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    return ui[lang][key] || ui[config.lang][key];
  }
}

export const t = useTranslations(config.lang)

