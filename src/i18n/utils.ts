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

const uiLangs: string[] = Object.keys(ui);

type Langs = typeof uiLangs[number]
const isLangs = (
  lang: string
): lang is Langs => {
  return uiLangs.some((v) => v === lang)
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    return ui[lang][key] || ui[config.lang][key];
  }
}

export const t = isLangs(config.lang) ? useTranslations(config.lang as keyof typeof ui):useTranslations("en")

