import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Typography } from "../../Atoms";


export const DatePickerLabel = (props) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // You can also add additional logic here if needed
  };

  return (
    <div className="d-flex flex-column p-2">
      <Typography label={props.typographyLabel} variant="h5" />
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        className="form-control"
      />
    </div>
  );
};
