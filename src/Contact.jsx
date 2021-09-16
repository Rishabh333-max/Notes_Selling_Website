import React, { useState } from "react";

const Contact=()=>{
    const [data,setData]=useState({
        fullname:"",
        phone:"",
        email:"",
        message:""
    });
    const inputEvent=(event)=>{
        const {name,value}=event.target;
        setData((preVal)=>{
            return{
                ...preVal,[name]:value
            }
            
        })
    }
    const formSubmit=(event)=>{
event.preventDefault()
alert(`My name is ${data.fullname}.My mobile number is ${data.phone} and email is ${data.email},Here is what i want to say ${data.message}`)
setData({
    fullname:"",
    phone:"",
    email:"",
    message:""
})

    } 
    return(
        <>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">FullName</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" onChange={inputEvent} value={data.fullname} placeholder="Enter FullName"/>
</div>

<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name="email" onChange={inputEvent} value={data.email} placeholder="name@example.com"/>
</div>
<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Phone Number</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" onChange={inputEvent} value={data.phone} placeholder="9999xxxx89"/>
</div>


<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message.....</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  name="message" onChange={inputEvent} value={data.message} placeholder="Message...."></textarea>
</div>
<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>

                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact;