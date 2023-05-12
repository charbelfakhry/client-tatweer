import React, {useState} from 'react';
import UserService from "../../services/UserService";



const UserForm = (user) =>{
    const [id, setId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    const handleSubmit = async (event) =>{
        event.preventDefault();
        await UserService.create({user:{firstName, lastName, email, phone}});
        alert("user created succssfully");
    }

    const handleReset = () => {

    }

    return(
        <div className='container w-75'>
            <h2>User Form</h2>
            <form>
                <div className="form-group row p-4">
                    <label htmlFor='name' className='col-sm-2 col-form-label'>First Name</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="text" id="name" onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row p-4">
                    <label htmlFor='name' className='col-sm-2 col-form-label'>Last Name</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="text" id="name" onChange={(e) => setLastName(e.target.value)} />
                    </div>
                </div>
                <div className='form-group row p-4'>
                    <label htmlFor='email' className='col-sm-2 col-form-label'>Email</label>
                    <div className="col-sm-10">
                        <input type="email" className='form-control' id="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className='form-group row p-4'>
                    <label htmlFor='phone' className='col-sm-2 col-form-label'>Phone</label>
                    <div className="col-sm-10">
                        <input className='form-control' type="text" id="phone" onChange={(e) => setPhone(e.target.value)} />
                    </div>
                </div>
                <div className='form-group p-4 row justify-content-center'>
                    <div className='col-1'>
                        <button onClick={handleSubmit} className='btn btn-sm btn-primary'>Save</button>
                    </div>
                    <div className='col-1'>
                        <button className='btn btn-sm btn-secondary'>Reset</button>
                    </div>
                </div>
            </form>
        </div>
    );
} 
export default UserForm;