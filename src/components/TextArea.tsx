import { Form } from 'react-bootstrap'

export function TextArea () {
  return (
        <Form.Control
          as='textarea'
          placeholder='Ingresar Texto'
          style={{ height: '150px' }}
          />
  )
}
