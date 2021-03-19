import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import Submit from '../components/Submit'
import Services from '../components/Services'
import Title from '../components/Title'

const Login = () => {


    const[person,setPerson] = useState({firstName:'',lastName:'',email:''})

    const [people,setPeople] = useState([]) 
 
 const handleChange = (e)=>{
     const name = e.target.name
     const value = e.target.value
     setPerson({...person,[name]:value})
 }
    
   const handleSubmit = (e)  =>{
       e.preventDefault()
       if(person.firstName &&person.lastName && person.email ){
           const newPerson = {...person}
           setPeople([...people,newPerson])
           setPerson({firstName:'',lastName:'',email:''})
           
       }
   }


    return ( 



<>
        <Hero >
        
            <container clasName="container-fluid">
<div className="row align-self-center">
    <div className="col-lg-12 justify-self-center"  >

        <div className="title">
        <Title title="SIGN-UP" />
        </div>

          <fieldset className="shadow-lg p-3 mb-5 bg-body rounded" style={{  backgroundImage:"linear-gradient(to right,#F7EFFE,#EFFEFC)",padding:25,borderRadius:28,textShadow:7}} >  
           <form style={{paddingLeft:45,paddingRight:45,paddingTop:45}}className='form'  onSubmit={handleSubmit}>
            <div className="row">
        <div className="col-md-12 justify-self-center" >
              <label className="form-label">FirstName</label>:
              <input  onChange={handleChange}    value={person.firstName} required  id="firstName" name="firstName" type="text" className="form-control" placeholder="type first name here"/>          </div>
        </div>
        <div style={{marginTop:12}} className="row">
        <div className="col-md-12 justify-self-center">
              <label className="form-label">LastName</label>:
              <input   onChange={handleChange}  value={person.lastName} required id="lastName" name="lastName" type="text" className="form-control" placeholder="type last name here"/>          </div>
        </div>
        <div style={{marginTop:12}} className="row">
        <div className="col-md-12 justify-self-center">
              <label className="form-label">Email</label>:
              <input   onChange={handleChange} value={person.email} required id="email"  name="email" type="Email" className="form-control" placeholder="type email here"/>          </div>
        </div>
        <div style={{marginTop:12}} className="row">
        <div className="col-md-12 justify-self-center">
              <label className="form-label">LastName</label>:
              <input   required   name="password" type="password" id="password" className="form-control" placeholder="type password here"/>          </div>
        </div >
        <div style={{marginLeft:15,marginTop:35}} className="row">
        <div className="col-md-12 justify-self-center">
        <button className="btn btn-primary btn-sm btn-rounded m-3 " type="submit"> Sign-Up</button>       </div>
        </div>
        
        

            </form>
            </fieldset>
          
          

        
       
        
        
        <br/>    
       
          
    </div>

</div>

            

</container>
            
      
       </Hero>

        
     
{people.map((person)=>{
                const{firstName,lastName,email,id,} = person
                if(person.firstName&&person.lastName&&person.email)
                {return <Submit ><div key={id}className="fieldset">
            <div style={{ backgroundImage:"linear-gradient(to right,#f67a36,#ed008c)",padding:25,}}>
                <h4> CONGRATULATIONS!!</h4>   
                  <h5><u>You are already Signed-Up </u></h5>
                  <h6>FirstName :<br/>{firstName}</h6>
                  <h6>LastName:<br/>{lastName}</h6>
                  <h6>Email : <br/>{email}</h6>
                  <br/>
                  <Link to="/Home" className="btn-success btn-rounded btn-lg m-3 "> Return Home</Link>
                </div>
              </div> 
              
        </Submit>}
              })
            }
           
        <Services/>
              </>

     );
}
 
export default Login;
/*
import React, { useState } from 'react';

const MoreControlledInputs = () => {

   
   const[person,setPerson] = useState({firstName:'',email:'',age:''})

   const [people,setPeople] = useState([]) 

const handleChange = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setPerson({...person,[name]:value})
}
   
  const handleSubmit = (e)  =>{
      e.preventDefault()
      if(person.firstName && person.email&& person.age){
          const newPerson = {...person}
          setPeople([...people,newPerson])
          setPerson({firstName:'',email:'',age:''})
          
      }
  }
   
    return ( 
    
    <article>
        <form className='form' onSubmit={handleSubmit}>
        <div>
            <label htmlFor='firstName'>FirstName</label>
            <input value={person.firstName} name='firstName' id='firstName' onChange={handleChange} type='text'/>
        </div>
        <div>
            <label htmlFor='email'>Email</label>
            <input value={person.email} name='email' id='email' onChange={handleChange } type='text'/>
        </div>
        <div>
            <label htmlFor='age'>age</label>
            <input value={person.age} name='age' id='age' onChange={handleChange} type='text'/>
        </div>
        <button  type='submit' className='btn'>Save Items</button>

        </form>

        {people.map((person)=>{
                const{firstName,email,id,age} = person
                return<div key={id}>
                    <h4>{firstName}</h4>
                    <h4>{email}</h4>
                    <h4>{age}</h4>
                </div>
            
            })
        }
        
    </article> );
}
 
export default MoreControlledInputs;
*/
/*
import React, { useState } from 'react';

const MoreControlledInputs = () => {

   
   const[person,setPerson] = useState({firstName:'',email:'',age:''})

   const [people,setPeople] = useState([]) 

const handleChange = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setPerson({...person,[name]:value})
}
   
  const handleSubmit = (e)  =>{
      e.preventDefault()
      if(person.firstName && person.email&& person.age){
          const newPerson = {...person}
          setPeople([...people,newPerson])
          setPerson({firstName:'',email:'',age:''})
          
      }
  }
   
    return ( 
    
    <article>
        <form className='form' onSubmit={handleSubmit}>
        <div>
            <label htmlFor='firstName'>FirstName</label>
            <input value={person.firstName} name='firstName' id='firstName' onChange={handleChange} type='text'/>
        </div>
        <div>
            <label htmlFor='email'>Email</label>
            <input value={person.email} name='email' id='email' onChange={handleChange } type='text'/>
        </div>
        <div>
            <label htmlFor='age'>age</label>
            <input value={person.age} name='age' id='age' onChange={handleChange} type='text'/>
        </div>
        <button  type='submit' className='btn'>Save Items</button>

        </form>

        {people.map((person)=>{
                const{firstName,email,id,age} = person
                return<div key={id}>
                    <h4>{firstName}</h4>
                    <h4>{email}</h4>
                    <h4>{age}</h4>
                </div>
            
            })
        }
        
    </article> );
}
 
export default MoreControlledInputs;
*/
