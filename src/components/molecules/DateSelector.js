import React from 'react';
import SelectField from '../atoms/SelectField';

const DateSelector = ({ years, months, days, onYearChange, onMonthChange, onDayChange }) => (
  <div>
    <SelectField id="yearSelect" options={years} onChange={onYearChange} />
    <SelectField id="monthSelect" options={months} onChange={onMonthChange} /> 
    <SelectField id="daySelect" options={days} onChange={onDayChange} />
  </div>
);

export default DateSelector;
