import React, { useCallback, useEffect, useState } from 'react';

export const CalendarMain = () => {
  // const date = new Date();
  // console.log(date);
  //
  // const week = ['일', '월', '화', '수', '목', '금', '토'];
  //
  // const [current, setCurrent] = useState(
  //   new Date().toLocaleDateString('ko-KR'),
  // );
  // const [select, setSelect] = useState(new Date().toLocaleDateString('ko-KR'));
  // console.log('current : ', current);
  // console.log('select : ', select);
  //
  // const yearOption: Intl.DateTimeFormatOptions = { year: 'numeric' };
  // const year = date.toLocaleDateString('ko-KR', yearOption);
  //
  // const monthOption: Intl.DateTimeFormatOptions = { month: 'long' };
  // const month = date.toLocaleDateString('ko-KR', monthOption);
  //
  // const dayOption: Intl.DateTimeFormatOptions = { day: 'numeric' };
  // const day = date.toLocaleDateString('ko-KR', dayOption);
  //
  // const weekdayOption: Intl.DateTimeFormatOptions = { weekday: 'long' };
  // const weekday = date.toLocaleDateString('ko-KR', weekdayOption);

  useEffect(() => {
    // setCurrent();
  }, []);

  const today = {
    year: new Date().getFullYear(), //오늘 연도
    month: new Date().getMonth() + 1, //오늘 월
    date: new Date().getDate(), //오늘 날짜
    day: new Date().getDay(), //오늘 요일
  };
  const week: string[] = ['일', '월', '화', '수', '목', '금', '토']; //일주일
  const [selectedYear, setSelectedYear] = useState(today.year); //현재 선택된 연도
  const [selectedMonth, setSelectedMonth] = useState(today.month); //현재 선택된 달
  const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate(); //선택된 해당년도와 해당달의 마지막 날짜
  console.log('dateTotalCount ::: ', dateTotalCount);
  const day = new Date(selectedYear, selectedMonth - 1, 1).getDay();
  console.log('day :: ', day);

  const returnWeek = useCallback(() => {
    //요일 반환 함수
    // let weekArr: JSX.Element[] = [];
    // week.forEach((v: string, i: number) => {
    //   return weekArr.push(<div key={i}>{v}</div>);
    // });
    // return weekArr;

    return week.map((element: string, index: number) => {
      return <div key={index}>{element}</div>;
    });
  }, []);

  const returnDay = useCallback(() => {
    //선택된 달의 날짜들 반환 함수
    let dayArr = [];

    for (const nowDay of week) {
      const day = new Date(selectedYear, selectedMonth - 1, 1).getDay();
      // console.log('week[day] : ', week[day]);
      // console.log('nowDay : ', nowDay);
      if (week[day] === nowDay) {
        for (let i = 0; i < dateTotalCount; i++) {
          dayArr.push(<div key={i + 1}>{i + 1}</div>);
        }
      } else {
        dayArr.push(<div className="weekday"></div>);
      }
    }

    return dayArr;
  }, [selectedYear, selectedMonth, dateTotalCount]);

  return (
    <>
      <div>
        <header>
          <h2>Header</h2>
        </header>
        <header>
          <h2>
            <span>Month Header</span>
          </h2>
        </header>
        <main>
          <div
            style={{
              width: '300px',
              height: '400px',
              margin: 'auto',
              padding: '10px 10px',
              border: '1px solid rgba(128, 128, 128, 0.267)',
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -60%)',
            }}
          >
            <div className="title">
              <h3>
                {}년 {}월
              </h3>
              <div className="pagination">
                <button>◀︎</button>
                <button>▶︎</button>
              </div>
            </div>
            <div>{returnWeek()}</div>
            <div>{returnDay()}</div>
          </div>
        </main>
        {/*<footer>footer</footer>*/}
      </div>
    </>
  );
};

// https://eunhee-programming.tistory.com/267
