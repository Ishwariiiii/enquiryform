import './index.css'
import React from 'react'
import { useState } from 'react'
export default function App() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    course: "",
    date: "",
    status: ""

  })

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [name]: value })
  }

  const onsubmits = (event) => {
    event.preventDefault()
    console.log(user)
  }

  return <div className="container">

    <div className="row" id='overAll'>
      <div className="col-md-5" id='side-1'>
        <img src="background-image.jpg" alt="code" height={500} width={510}></img>
      </div>


      <div className='col-md-7' id='side-2'>
        <h1>Enquiry Form</h1>
        <form onSubmit={onsubmits}>


          <div className='row'>
            <div className='col-md-3 me-5 ms-5' >
              <label>ID</label>
              <input type="number" value={user.id} onChange={handleInput} name="id" placeholder="Enter your ID" className='feilds' autoComplete='off'></input>
            </div>

            <div className='col-md-3 me-5 ms-5'>
              <label>NAME</label>
              <input type="text" value={user.name} onChange={handleInput} name="name" placeholder='Enter your name' className='feilds' autoComplete='off'></input>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-3 me-5 ms-5'>
              <label>E_MAIL</label>
              <input type="email" value={user.email} onChange={handleInput} name="email" placeholder="Enter your e-mail" className='feilds' autoComplete='off'></input>
            </div>

            <div className='col-md-3 me-5 ms-5'>
              <label>PHONE</label>
              <input type="number" value={user.number} onChange={handleInput} name="phone" placeholder='Enter your phone' className='feilds' autoComplete='off'></input>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-3 me-5 ms-5'>
              <label>COURSE</label>
              <input type="text" value={user.course} onChange={handleInput} name="course" placeholder="Enter your course" className='feilds' autoComplete='off'></input>
            </div>

            <div className='col-md-3 me-5 ms-5'>
              <label>DATE</label><br />
              <input type="date" value={user.date} onChange={handleInput} name="date" className='feilds' id='change' autoComplete='off'></input>
            </div>
          </div>

          <div className='row'>
            {/* <div className='col-md-3'>
              <label>STATUS</label>
              <input type="text" value={user.status} onChange={handleInput} name="status" placeholder="Enter status" className='feilds' autoComplete='off'></input>
            </div> */}

            <div className='col-md-3 me-5 ms-5'>

              <button type='submit' className='submit'>Submit</button>
            </div>
          </div>



        </form>
      </div>



    

    </div>
  </div>
}