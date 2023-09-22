import { Form } from 'react-bootstrap'
import { LANGUAGES } from '../constants'
import { LanguageSelectionType } from '../enums/actionType'
import React from 'react'
import { type Language } from '../types'

interface Props {
  onChange: (language: Language) => void
  type: LanguageSelectionType
  value: string
}

export function Select ({ onChange, type, value }: Props) {
  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectValue = event.target.value
    if (selectValue == null) return
    onChange(selectValue as Language)
  }

  return (
        <Form.Select aria-label='From Language select' onChange={handleOnChange} value={value} required>
            {type === LanguageSelectionType.FROM && <option key='auto'>Auto detect</option>}
            {
              Object.entries(LANGUAGES).map(data => (
                <option key={data[0]} value={data[0]}>{data[1]}</option>
              ))
            }
          </Form.Select>
  )
}
