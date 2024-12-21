import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// foe enter values
  const [name, setName] =useState("")
  const [address, setAddress]=useState("")
  const [mobile, setMobile] =useState("")
  const [email, setEmail] =useState("")
  const [gender, setGender] =useState("")
  const [date, setDate] =useState("")
  const [option, setOption] =useState("")

  // for check error
  const [invalidName, setInvalidName]=useState(false)
  const [invalidAddress, setInvalidAddress]=useState(false)
  const [invalidNumber, setInvalidNumber]=useState(false)
  const [invalidEmail, setInvalidEmail]=useState(false)
  const [invalidGender, setInvalidGender] =useState(false)
  const [invalidDate, setInvalidDate] =useState(false)
  const [invalidOption, setInvalidOption] =useState(false)

 

  // validate name
  const validateName=(inputTag)=>{
    console.log(inputTag ,typeof inputTag);

    const  {name, value} =inputTag


    if(name =="name"){
      setName(value)
      if(!!value.match(/^[a-zA-Z\s]+$/)){
        setInvalidName(false)
      }else{
        setInvalidName(true)
      }
    }
    
  }

  // validate address
  const validateAddress =(value)=>{
     setAddress(value)
     if(value.trim().length<10){
      setInvalidAddress(true)
     }else{
      setInvalidAddress(false)
     }
  }

  // validate mobile number

  const validateNumber=(value)=>{
    setMobile(value)
    if(value.match(/^\d{10}$/)){
      setInvalidNumber(false)
    }else{
      setInvalidNumber(true)
    }   
  }

  // validate email

  const validateEmail=(value)=>{
    setEmail(value)
    if(value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
      setInvalidEmail(false)
    }else{
      setInvalidEmail(true)
    }
  }

  // validate gender
  const validateGender =(e)=>{
    const value =e.target.value;
    setGender(value)
    if(value===""){
      setInvalidGender(true)
    }else{
      setInvalidGender(false)
    }
  }

  // validate date
  const validateDate=(value)=>{
    setDate(value)
    const today=new Date()
    const birthDate=new Date(value)
    const age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if(age<18 || (age===18 && month<0)){
           setInvalidDate(true)
    }else{
      setInvalidDate(false)
    }
  }

  // validate course

  const validateCourse=(value)=>{
      setOption(value)
      if(value===""){
        setInvalidOption(true)
      }else{
        setInvalidOption(false)
      }
  }
  

  // submit

  const handleSubmit =(e)=>{
    e.preventDefault()

    if(!invalidName && !invalidAddress && !invalidNumber && !invalidEmail && !invalidGender && !invalidDate && !invalidOption &&name &&
      address && mobile && email && gender && date && option){
           alert("Form submitted successfully")
           reset()
           
    }else{
      alert("Please fill the form correctly")
    }
  }

  const reset=()=>{
    setName("");
    setAddress("");
    setMobile("");
   setEmail("");
   setGender("");
   setDate("");
   setOption("");
  }

  return (
    <>
      <div className='main d-flex justifyontent-center align-items-center' style={{width:"100%", minHeight:"100vh"}}>
        <div className='container'>

          <div className='head'>
             <h2 className='text-center' style={{fontWeight:"600"}}>Higher Secondary Admission</h2>
          </div>

          <form action="" className='form' onSubmit={handleSubmit}>
            {/* name */}
            <div className='name'>
              <label htmlFor="">Full Name</label>
              <input onChange={(e)=>validateName(e.target)} type="text" value={name} name='name' placeholder='Enter your full name'/>
            </div>

            {invalidName && <div className='text-danger  mb-3 ps-5'>Invalid Name</div>}

            {/* address */}
            <div className='address'>
              <label htmlFor="">Address</label>
              <textarea onChange={(e)=>validateAddress(e.target.value)} value={address} name="address" id="" placeholder='Enter your address'></textarea>
            </div>

            {invalidAddress && <div className='text-danger  mb-3 ps-5'>Address must contain atleast 10 character</div>}

            {/* mobile */}
            <div className='mobile'>
              <label htmlFor="">Mobile</label>
              <input onChange={(e)=>validateNumber(e.target.value)} type="text" value={mobile} name='mobile' placeholder='Enter your phone number'/>
            </div>
 
            {invalidNumber && <div className='text-danger  mb-3 ps-5'>Invalid mobile number</div>}

           {/* email */}
            <div className='email'>
              <label htmlFor="">Email</label>
              <input type="email" onChange={(e)=>validateEmail(e.target.value)} value={email} name='email' placeholder='Enter your email address'/>
            </div>

            {invalidEmail && <div className='text-danger  mb-3 ps-5'>Invalid Email address</div>}
 
            {/* gender */}
            <div className='name'>
              <label htmlFor="">Gender</label>
              <div className='radio'>
                <label htmlFor="" className='gen flex items-center'><input onChange={validateGender} type="radio" name='gender' value='male' className='mr-2' checked={gender === 'male'} />Male</label>
                <label htmlFor="" className='gen flex items-center'><input onChange={validateGender} type="radio" name='gender' value='female' className='mr-2' checked={gender === 'female'} />Female</label>

              </div>
            </div>

            {invalidGender && <div className='text-danger  mb-3 ps-5'>Please select a gender</div>}
           
            {/* date */}
            <div className='date'>
              <label htmlFor="">Date of birth</label>
              <input onChange={(e)=>validateDate(e.target.value)} type="date" value={date} placeholder='Enter your email address'/>
            </div>

            {invalidDate && <div className='text-danger mb-3 ps-5'>You must be at least 18 years old</div>}

             {/* course */}
            <div className='course'>
              <label htmlFor="">Course</label>
              <select name="" id="" onChange={(e)=>validateCourse(e.target.value)} value={option}>
                <option value="">Select a course</option>
                <option value="biology">Biology</option>
                <option value="computer science">Computer Science</option>
                <option value="commerce">Commerce</option>
                <option value="humanities">Humanities</option>
              </select>
            </div>

            
            {invalidOption && <div className='text-danger mb-3 ps-5'>Please select a course</div>}
             
             {/* button */}
            <div className='button'>
              <button type='submit' className='submit'>Submit</button>
              <button type='button' className='cancel' onClick={reset}>Cancel</button>
            </div>
            
          </form>
        </div>

      </div>
    </>
  )
}

export default App
