import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { getFormsPeriods } from "../../Services/EmployChangesApi"; // adjust import as needed

const FortnightControlledDatePicker = ({ handleDateChange, selectedDate, isDateSelectable }) => {
  const [selectedFormId, setSelectedFormId] = useState(null);
  const [formsPeriods, setFormsPeriods] = useState([]);

  useEffect(() => {
    (async () => {
      const periods = await getFormsPeriods();
      const filtered = periods.data.data.filter(
        (form) =>
          Array.isArray(form.formsType) &&
          form.formsType.some((type) => type.name === "Quincenal")
      );
      setFormsPeriods(filtered);
    })();
  }, []);

  const handleChange = (e) => {
    const id = Number(e.target.value);
    setSelectedFormId(id);
  };

  return (
    <Form.Group>
      <Form.Label>📅 Selecciona un rango de fechas</Form.Label>
      <Form.Select value={selectedFormId || ""} onChange={handleChange}>
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
