import { Container, Col, Row } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from './reducer/useStore'
function App () {
  const { languageFrom, languageTo, ChangeLanguage } = useStore()

  return (
    <Container>
      <h1>Google Translate</h1>
      <Row>
        <Col>
          <h2>From</h2>
          {languageFrom}
        </Col>
        <Col>
          <button onClick={ChangeLanguage}>Change</button>
        </Col>
        <Col>
          <h2>To</h2>
          {languageTo}
        </Col>
      </Row>
    </Container>
  )
}

export default App
