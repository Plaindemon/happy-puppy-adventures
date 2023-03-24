import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div>
      
      <DatePicker value={startDate} onChange={(date) => setStartDate(date)} />
      
      <DatePicker value={endDate} onChange={(date) => setEndDate(date)} />
    
    </div>
  );
};

export default DatePickerComponent;
