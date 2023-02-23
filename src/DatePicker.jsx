import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function ExampleDatePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    date = Date.parse(date)
    sendDateToApi(parseTimestamp(date));
  };


  const parseTimestamp = (date) => {
  const newDate = new Date(date);
  const day = newDate.getDate().toString().padStart(2, '0');
  const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
  const year = newDate.getFullYear().toString();
  const formattedDate = `${day}/${month}/${year}`;
  return (formattedDate)
  }

 

  const sendDateToApi = (date) => {
    const url = 'http://localhost:8080/api/date'; // replace with your API endpoint URL
    fetch(url, {
      method: 'POST', // use the POST method to send data
      headers: {
        'Content-Type': 'application/json' // set the content type to JSON
      },
      body: JSON.stringify({ "date": date }) // send the date in the request body as JSON
    })
    .then(response => {
      if (response.ok) {
        console.log('Date sent to API');
      } else {
        throw new Error('Error sending date to API');
      }
    })
    .catch(error => {
      console.error(error);
    });
  };
  

  return (
      <DatePicker selected={selectedDate} onChange={handleDateChange} />
  );
}

export default ExampleDatePicker