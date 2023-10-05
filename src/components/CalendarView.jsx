import { useState } from 'react';
import Calendar from 'react-calendar';
import { addDays, isSameDay } from '../utils';

const today = new Date();
const tomorrow = addDays(today, 1);
const in3Days = addDays(today, 3);
const in5Days = addDays(today, 5);
const datesToAddClassTo = [tomorrow, in3Days, in5Days];
const datesToAddContentTo = [tomorrow, in3Days, in5Days];

function tileClassName({ date, view }) {
  // Add class to tiles in month view only
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is on the list of dates to add class to
    if (datesToAddClassTo.find((dDate) => isSameDay(dDate, date))) {
      return 'bg-green-100';
    }
  }
}

function tileContent({ date, view }) {
  // Add class to tiles in month view only
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is on the list of dates to add class to
    if (datesToAddContentTo.find(dDate => isSameDay(dDate, date))) {
      return 'My content';
    }
  }
}

export default function CalendarView() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={tileClassName}
        tileContent={tileContent}
      />
    </div>
  );
}
