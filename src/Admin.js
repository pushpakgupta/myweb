import React, { useState } from 'react';

const Admin = () =>{

const [inputval, setInputval] = useState({
    email : '',
    password : '',
});

const inputChange = (event) => {
   
    console.log(event.target.value);   
   var value = event.target.value;
   var name = event.target.name;

   setInputval ((preVal) =>{

    console.log(preVal);

    if( name === 'email'){
        return {
            email : value,
            Password : preVal.password,
        }
    }else if( name === 'password'){
        return {
            email : preVal.email,
            password : value,
        }
    }

   })

 }

 const onSubmit = (event) =>{

    event.preventDefault();   

    if( inputval.email === 'p@gmail.com' && inputval.password === '123'){
        localStorage.setItem('email', inputval.email);
        localStorage.setItem('password', inputval.password);        
        alert('login sucess');
        window.location.assign("/account");        
    }else{
        alert('incorrect email id and password');
    }


 }


   return(
    <>
        <form onSubmit={onSubmit} className="loginform">
            <input type="email" name='email' onChange={inputChange} 
            value={inputval.email}  
            placeholder='email address' />
            <input type="password" name='password' onChange={inputChange} 
            value={inputval.password} 
             placeholder='password' />
            <button type='submit'>Login</button>
        </form>
    </>

   )

}

export default Admin;