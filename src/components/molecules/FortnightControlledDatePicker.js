import { Form } from "react-bootstrap";

const FortnightControlledDatePicker = ({ handleDateChange, formsPeriods, selectedFormId }) => {

  return (
    <Form.Group>
      <Form.Label>📅 Selecciona un rango de fechas</Form.Label>
      <Form.Select value={selectedFormId || ""} onChange={handleDateChange}>
        <option value="" disabled>
          Selecciona un período
        </option>
        {formsPeriods.map((form) => (
          <option key={form.id} value={form.id}>
            {form.dateStart} - {form.dateEnd}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default FortnightControlledDatePicker;
