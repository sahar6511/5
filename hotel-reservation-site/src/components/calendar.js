import React from 'react';
import { Calendar, DatePicker } from 'react-persian-datepicker';
 
const MyComponent = () => (
  <div>
    <div>
      {/* Calendar Component */}
      <Calendar />
    </div>
    
    <div>
      {/* Date Picker Component */}
      <DatePicker />
    </div>
  </div>
);