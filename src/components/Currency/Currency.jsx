import './Currency.scss'
import Form from "react-bootstrap/Form";

function Currency() {

  return (
      <Form.Select size="sm" aria-label="Default select example">
        <option value="1">Грн.</option>
        <option value="2">USD</option>
        <option value="3">Euro</option>
      </Form.Select>
  );
}

export default Currency;
