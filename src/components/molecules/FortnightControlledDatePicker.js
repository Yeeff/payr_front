import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FortnightControlledDatePicker = ({handleDateChange, selectedDate,isDateSelectable}) => {

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        filterDate={isDateSelectable}
        dateFormat="yyyy-MM-dd"
        placeholderText="Selecciona el 1 o el 15"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
    </div>
  );
};

export default FortnightControlledDatePicker;

