
import { DtPicker } from "react-calendar-datetime-picker";
import "react-calendar-datetime-picker/dist/style.css";
import React, { useState, useEffect } from "react";


const DatePicker = () => {

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [days, setDays] = useState(0);
 
  const handleClickSearch=()=>{
  }

  
  

  useEffect(() => {
    if(startDate && endDate && endDate.day > startDate.day){
      setDays(endDate.day - startDate.day)
    }
    // setStartDate({
    //   year: date.toLocaleDateString("fa-IR", { year: "numeric" }),
    //   month: date.toLocaleDateString("fa-IR", { month: "numeric" }),
    //   day: date.toLocaleDateString("fa-IR", { day: "numeric" }),
    // });

  }, [startDate][endDate]);

  return (
    <div>


    <div style={{ display: "flex", margin: "100px 0" }}>
      <p>تاریخ ورود </p>
      <DtPicker
        onChange={setStartDate}
        local="fa"
        clearBtn="true"
        isRequired="true"
        todayBtn="true"
        // initValue={startDate}
      />
      <p>تاریخ خروج</p>
      <DtPicker
        onChange={setEndDate}
        local="fa"
        clearBtn="true"
        isRequired="true"
        todayBtn="true"
      />
      <p>مدت</p>
      <input type="text" disabled="disabled" value={`${days} شب`} />
      <button onClick={handleClickSearch}>جستجوی اتاق</button>
    </div>


</div>
  
  );
};
export default DatePicker;
