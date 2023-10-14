import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const [dob, setDob] = useState(null);
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (dob) {
      const today = new Date();
      const birthDate = new Date(dob);
      const ageInMilliseconds = today - birthDate;
      const ageInDays = ageInMilliseconds / (1000 * 60 * 60 * 24);
      const ageInYears = Math.floor(ageInDays / 365);
      const remainingDays = Math.floor(ageInDays % 365);

      setAge({ years: ageInYears, days: remainingDays });
    }
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <div>
        <DatePicker
          selected={dob}
          onChange={(date) => setDob(date)}
          maxDate={new Date()} // Restrict selecting future dates
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
        />
      </div>
      <button onClick={calculateAge}>Calculate Age</button>
      {age && (
        <div>
          <p>Age: {age.years} years and {age.days} days</p>
        </div>
      )}
    </div>
  );
}

export default App;