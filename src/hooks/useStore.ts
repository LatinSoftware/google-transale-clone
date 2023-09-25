import { type LanguageFrom, type Language, type Action, type State } from '../types'
import { useReducer } from 'react'

import { ActionType } from '../enums/actionType'

export const initialState: State =
{
  languageFrom: 'auto',
  languageTo: 'en',
  textFrom: '',
  result: '',
  loading: false
}

// definir acciones
function reducer (state: State, action: Action): State {
  const { type } = action

  if (type === ActionType.SET_FROM_LANGUAGE) {
    const loading = state.textFrom !== ''
    return {
      ...state,
      languageFrom: action.payload,
      result: '',
      loading
    }
  }
  if (type === ActionType.SET_TO_LANGUAGE) {
    const loading = state.textFrom !== ''
    return {
      ...state,
      languageTo: action.payload,
      loading,
      result: ''
    }
  }
  if (type === ActionType.INTERCHANGE_LANGUAGE) {
    if (state.languageTo === state.languageFrom || state.languageFrom === 'auto') return state
    const loading = state.textFrom !== ''
    return {
      ...state,
      languageFrom: state.languageTo,
      languageTo: state.languageFrom,
      loading
    }
  }
  if (type === ActionType.SET_FROM_TEXT) {
    return {
      ...state,
      loading: true,
      textFrom: action.payload
    }
  }
  if (type === ActionType.SET_RESULT_TEXT) {
    return {
      ...state,
      loading: false,
      result: action.payload
    }
  }

  return state
}

export function useStore () {
  const [{ languageFrom, languageTo, loading, textFrom, result }, dispatch] = useReducer(reducer, initialState)

  const ChangeLanguage = () => {
    dispatch({ type: ActionType.INTERCHANGE_LANGUAGE })
  }

  const SetFromLanguage = (language: LanguageFrom) => {
    dispatch({ type: ActionType.SET_FROM_LANGUAGE, payload: language })
  }

  const SetToLanguage = (language: Language) => {
    dispatch({ type: ActionType.SET_TO_LANGUAGE, payload: language })
  }

  const SetFromText = (input: string) => {
    dispatch({ type: ActionType.SET_FROM_TEXT, payload: input })
  }

  const SetResultText = (input: string) => {
    dispatch({ type: ActionType.SET_RESULT_TEXT, payload: input })
  }

  return {
    languageFrom,
    languageTo,
    loading,
    textFrom,
    result,
    ChangeLanguage,
    SetFromLanguage,
    SetToLanguage,
    SetFromText,
    SetResultText
  }
}
