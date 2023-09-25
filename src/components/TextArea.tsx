import { Form } from 'react-bootstrap'
import { LanguageSelectionType } from '../enums/actionType'

interface Props {
  value: string
  loading?: boolean
  onChange: (input: string) => void
  type: LanguageSelectionType
}

const commonStyles = { border: 0, height: '200px' }

const getPlaceholder = ({ type, loading }: { type: LanguageSelectionType, loading?: boolean }) => {
  if (type === LanguageSelectionType.FROM) return 'Introducir texto'
  if (loading === true) return 'Cargando...'
  return 'Traducción'
}

export function TextArea ({ value, onChange, type, loading = false }: Props) {
  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target
    onChange(value)
  }

  const styles = type === LanguageSelectionType.FROM
    ? commonStyles
    : { ...commonStyles, backgroundColor: '#f5f5f5' }

  return (
        <Form.Control
          as='textarea'
          placeholder={getPlaceholder({ type, loading })}
          autoFocus={type === LanguageSelectionType.FROM}
          disabled={type === LanguageSelectionType.TO}
          style={styles}
          value={value}
          onChange={handleOnChange}
          />
  )
}
