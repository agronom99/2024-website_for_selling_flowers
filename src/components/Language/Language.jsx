import './Language.scss'
import Form from "react-bootstrap/Form";

function Language() {

  return (
      <Form.Select size="sm" aria-label="Default select example">
        <option value="1">UA</option>
        <option value="2">UK</option>
        <option value="3">RU</option>
      </Form.Select>
  );
}

export default Language;
