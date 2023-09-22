import { Container, Col, Row, Button, Stack } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from './reducer/useStore'
import { Select } from './components/Select'
import { LanguageSelectionType } from './enums/actionType'
import { SwitchIcon } from './icons'
import { TextArea } from './components/TextArea'
function App () {
  const { languageFrom, languageTo, ChangeLanguage, SetFromLanguage, SetToLanguage } = useStore()

  return (
    <Container>
      <h1>Google Translate</h1>
      <Row md={6} xs={12} >
        <Col>
        <Stack gap={1}>
          <Select type={LanguageSelectionType.FROM}
            onChange={SetFromLanguage}
            value={languageFrom}
            />
            <TextArea />
        </Stack>
        </Col>
        <Col xs='auto' >
          <Button variant='link' onClick={ChangeLanguage}>
            <SwitchIcon />
          </Button>
        </Col>
        <Col>
          <Stack>
            <Select type={LanguageSelectionType.TO}
            onChange={SetToLanguage}
            value={languageTo}
            />
            <TextArea />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
