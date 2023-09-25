import { useEffect } from 'react'
import { Container, Col, Row, Button, Stack } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from './hooks/useStore'
import { Select } from './components/Select'
import { LanguageSelectionType } from './enums/actionType'
import { SwitchIcon } from './icons'
import { TextArea } from './components/TextArea'
import { Transale } from './services/translate'
import { useDebounce } from './hooks/useDebounce'
function App () {
  const {
    languageFrom,
    languageTo,
    ChangeLanguage,
    SetFromLanguage,
    SetToLanguage,
    textFrom,
    result,
    SetFromText,
    SetResultText,
    loading
  } = useStore()

  const debouncedText = useDebounce(textFrom, 250)
  useEffect(() => {
    if (debouncedText === '') return
    Transale({ text: debouncedText, languageFrom, languageTo })
      .then(result => {
        SetResultText(result)
      })
      .catch(error => { console.log(error) })
  }, [debouncedText, languageFrom, languageTo])

  return (
    <Container>
      <h1>Google Translate</h1>
      <Row className='justify-content-center'>
        <Col md={5}>
        <Stack gap={1}>
          <Select type={LanguageSelectionType.FROM}
            onChange={SetFromLanguage}
            value={languageFrom}
            />
            <TextArea
            type={LanguageSelectionType.FROM}
            value={textFrom}
            onChange={SetFromText} />
        </Stack>
        </Col>
        <Col md={1}>
          <Button variant='link' onClick={ChangeLanguage}>
            <SwitchIcon />
          </Button>
        </Col>
        <Col md={5}>
          <Stack>
            <Select type={LanguageSelectionType.TO}
            onChange={SetToLanguage}
            value={languageTo}
            />
            <TextArea
            type={LanguageSelectionType.TO}
            value={result}
            onChange={SetResultText}
            loading={loading}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
