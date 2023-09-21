import { type LANGUAGES } from './constants'
import { type ActionType } from './enums/actionType'
export interface State {
  languageFrom: LANGUAGE_FROM
  languageTo: LANGUAGE_TO
  textFrom: string
  result: string
  loading: boolean
}

export type Action =
| { type: ActionType.INTERCHANGE_LANGUAGE }
| { type: ActionType.SET_FROM_LANGUAGE, payload: LANGUAGE_FROM }
| { type: ActionType.SET_TO_LANGUAGE, payload: LANGUAGE_TO }
| { type: ActionType.SET_FROM_TEXT, payload: string }
| { type: ActionType.SET_RESULT_TEXT, payload: string }

export type LANGUAGE_FROM = | keyof typeof LANGUAGES | 'auto'
export type LANGUAGE_TO = keyof typeof LANGUAGES
