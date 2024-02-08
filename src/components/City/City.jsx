import Form from "react-bootstrap/Form";

function City() {

  return (
      <Form.Select size="sm" style={{width:"85px"}} aria-label="Default select example">
        <option value="1">Київ</option>
        <option value="2">Вінниця</option>
        <option value="3">Львів</option>
      </Form.Select>
  );
}

export default City;