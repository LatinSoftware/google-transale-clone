import { type LANGUAGES, type AUTO_LANGUAGE } from './constants'
import { type ActionType } from './enums/actionType'
export interface State {
  languageFrom: LanguageFrom
  languageTo: Language
  textFrom: string
  result: string
  loading: boolean
}

export type Action =
| { type: ActionType.INTERCHANGE_LANGUAGE }
| { type: ActionType.SET_FROM_LANGUAGE, payload: LanguageFrom }
| { type: ActionType.SET_TO_LANGUAGE, payload: Language }
| { type: ActionType.SET_FROM_TEXT, payload: string }
| { type: ActionType.SET_RESULT_TEXT, payload: string }

export type AutoLanguage = typeof AUTO_LANGUAGE
export type Language = keyof typeof LANGUAGES
export type LanguageFrom = Language | AutoLanguage
