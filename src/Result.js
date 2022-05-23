import React, { useState }  from 'react'

import './style2.css'

const Result = () => {
    const [useRegistration, setuserRegistration] = useState([{
        Name:"",
        department : "",
        rating : ""
    }]);
    const [next, setNext] = useState(false);
    const [Records, setRecords] = useState([]);
    const handleInput = (e) => {
       const name = e.target.name;
        setuserRegistration({...useRegistration,[name]:e.target.value})
        console.log(useRegistration)

    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const newRecord = {...useRegistration,id:new Date().getTime().toString()}
        setRecords([...Records,newRecord])
        setuserRegistration({  Name:"", department :"",rating :""})
        setNext(true)
    }
    console.log(Records);
    
    const back = () => {
        setNext(false); 
    }
  return (
    <div className='body' >
            <div className='container__form'>
                {next ? null :
                        <form action='' onSubmit={handleSubmit}>
                           <h1>EMPOLYEE FEEDBACK FORM</h1>  <br /><br /><br />

                        <label className='top' htmlFor='name'>Name :</label>
                        <input type="text" name='Name' id='name' autoComplete='off' value ={useRegistration.Name} onChange={ handleInput } ></input> <br /><br /><br />

                        <label className='top' htmlFor='department'>Department :</label>
                        <input type="text" name = 'department' id = 'department' autoComplete = 'off' value = {useRegistration.department} onChange = { handleInput } ></input> <br /><br /><br /><br />

                        <label className='top' htmlFor='rating'>Rating :</label>
                        <input type="text" name = 'rating' id = 'rating' autoComplete = 'off' value = {useRegistration.rating } onChange = { handleInput } ></input> <br /><br /><br />

                         <button  id='submit'>Submit</button>
                        </form>
                }
            </div>
            {next ?
             <div className='feedback'>
                 <h1>EMPOLY FEEDBACK DATA</h1> <br /><br />
                 <div className="parent">
                     {
                         Records.map((curreElem)=>{
                             const {id,Name,department,rating} = curreElem

                             return (
                                 <div key = {id} className = "child">name:{Name}|Department:{department}|Rating:{rating}</div>
                             )
                         })
                     }
                 </div> <br /><br /><br />
                 {next?<input className='button' id='submit' onClick={back} type ="button" value = "GO back" />:null}
             </div> : null }

    </div>
  )
}

export default Result