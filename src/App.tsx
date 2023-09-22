import { Container, Col, Row } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from './reducer/useStore'
import { Select } from './components/Select'
import { LanguageSelectionType } from './enums/actionType'
function App () {
  const { languageFrom, languageTo, ChangeLanguage, SetFromLanguage, SetToLanguage } = useStore()

  return (
    <Container>
      <h1>Google Translate</h1>
      <Row >
        <Col>
          <Select type={LanguageSelectionType.FROM}
            onChange={SetFromLanguage} />
          {languageFrom}
        </Col>
        <Col xs='auto' >
          <button onClick={ChangeLanguage}>Change</button>
        </Col>
        <Col>
          <Select type={LanguageSelectionType.TO}
          onChange={SetToLanguage} />
          {languageTo}
        </Col>
      </Row>
    </Container>
  )
}

export default App
