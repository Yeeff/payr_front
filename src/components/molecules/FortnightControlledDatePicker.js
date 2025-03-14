import React from "react";
import DatePicker from "react-datepicker";
import { Form, InputGroup } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa"; // React-Icons
import "react-datepicker/dist/react-datepicker.css";

const FortnightControlledDatePicker = ({ handleDateChange, selectedDate, isDateSelectable }) => {
  
  return (
    <Form.Group>
      <Form.Label>📅 Selecciona una fecha</Form.Label>

      <InputGroup>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          filterDate={isDateSelectable}
          dateFormat="yyyy-MM-dd"
          placeholderText="Selecciona el 1 o el 15"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          className="form-control"
        />
        
        <InputGroup.Text>
          <FaCalendarAlt />
        </InputGroup.Text>
      </InputGroup>

    </Form.Group>
  );
};

export default FortnightControlledDatePicker;
