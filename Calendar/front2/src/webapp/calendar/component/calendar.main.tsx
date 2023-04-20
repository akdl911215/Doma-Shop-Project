import React, { useEffect, useState } from 'react';

export const CalendarMain = () => {
  const date = new Date();
  console.log(date);

  const [current, setCurrent] = useState(
    new Date().toLocaleDateString('ko-KR'),
  );
  const [select, setSelect] = useState(new Date().toLocaleDateString('ko-KR'));
  console.log('current : ', current);
  console.log('select : ', select);

  const yearOption: Intl.DateTimeFormatOptions = { year: 'numeric' };
  const year = date.toLocaleDateString('ko-KR', yearOption);

  const monthOption: Intl.DateTimeFormatOptions = { month: 'long' };
  const month = date.toLocaleDateString('ko-KR', monthOption);

  const dayOption: Intl.DateTimeFormatOptions = { day: 'numeric' };
  const day = date.toLocaleDateString('ko-KR', dayOption);

  const weekdayOption: Intl.DateTimeFormatOptions = { weekday: 'long' };
  const weekday = date.toLocaleDateString('ko-KR', weekdayOption);

  useEffect(() => {
    // setCurrent();
  }, []);

  return (
    <>
      <div>
        <header>
          <h2>Header</h2>
        </header>
        <header>
          <h2>
            <span>{month}</span>
          </h2>
        </header>
        <main>
          <div>{year}</div>
          <div>{month}</div>
          <div>{day}</div>
          <div>{weekday}</div>
        </main>
        <footer>footer</footer>
      </div>
    </>
  );
};
