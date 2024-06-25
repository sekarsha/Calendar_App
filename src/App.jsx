import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [selectdate, setselectdate] = useState(new Date());

  const dayInMonth = () => {

    const days_array = [];

    const first_day = new Date(selectdate.getFullYear(), selectdate.getMonth(), 1);
    const last_day = new Date(selectdate.getFullYear(), selectdate.getMonth() + 1, 0)


    for (let i = 0; i < first_day.getDay(); i++) {

      days_array.push(null)
    }

    for (let i = 1; i <= last_day.getDate(); i++) {

      days_array.push(new Date(selectdate.getFullYear(), selectdate.getMonth(), i));
    }

    return days_array

    console.log(days_array);

  }

  dayInMonth()

  const days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ]


  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  const handle_change = (e) => {
    const month = parseInt(e.target.value, 10);
    setselectdate(new Date(selectdate.getFullYear(), month, 1))
  }

  const handle_change_year = (e) => {
    const year = parseInt(e.target.value, 10);
    setselectdate(new Date(year, selectdate.getMonth(), 1))
  }

  const curent_date = (date1, date2) => {
    return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
  };

  return (
    <>
      <div className='back vh-100 d-flex justify-content-center '>

        <div className=' d-flex justify-content-center  align-content-center    align-items-center'>
          <div>
            <div className=' d-flex  justify-content-center align-content-lg-between mb-3'>
                <h1 className='  fw-bold text-white font-monospace'>Calendar</h1>
               <img src="https://cdn-icons-png.flaticon.com/512/807/807714.png"  width={"100px"} alt="" />
            </div>
            <div style={{ width: "350px" }} className='  bg-primary pt-2 pb-2'>

              <div className=' d-flex justify-content-between   p-2 '>
                <button className=' border-0  ' onClick={() => { setselectdate(new Date(selectdate.getFullYear(), selectdate.getMonth() - 1, 1)) }} ><i className="bi bi-arrow-left-circle-fill"></i></button>



                <select className=' ps-3 border-0' value={selectdate.getMonth()} onChange={handle_change} >


                  {months.map((month, index) => (<option key={index} value={index} >{month} </option>))}


                </select>





                <select className=' ps-3 border-0' value={selectdate.getFullYear()} onChange={handle_change_year} >
                  {
                    Array.from({ length: 10 }, (_, i) => selectdate.getFullYear() - 5 + i).map((year) =>
                      <option key={year} value={year}>{year}</option>)
                  }
                </select>




                <button className=' border-0' onClick={() => { setselectdate(new Date(selectdate.getFullYear(), selectdate.getMonth() + 1, 1)) }}  ><i className="bi bi-arrow-right-circle-fill"></i></button>
              </div>


              <div className=' d-flex justify-content-between ms-2  me-2 ps-3 pe-2'>
                {days.map((day) => (<div key={day}>{day}</div>))}
              </div>

              <div className=' sha pe-3'>
                {dayInMonth().map((day, index) => (

                  <div id='three' key={index} className={day ? (curent_date(day, new Date()) ? "one ,curent " : "day") : "two"}   >{day ? day.getDate() : ""} </div>

                ))}
              </div>

            </div>
          </div>



        </div>


      </div>
    </>
  )
}

export default App
