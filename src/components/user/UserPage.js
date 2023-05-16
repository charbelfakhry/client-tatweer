import React, {useState} from "react";
import { useEffect } from "react";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import UserService from "../../services/UserService";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineUserAdd, AiFillDelete, AiFillEdit } from "react-icons/ai";

//onCreation complete of this Component. The first method react useEffect

const UserPage = () => {

    const [persons, setPersons] = useState([]);
    const [person, setPerson] = useState(null);

    const history = useHistory();

    useEffect(() =>{
        loadUsers();
    }, []);

    const loadUsersFromExternalAPI = async() =>
    {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                setPersons(persons);
            }).catch(err => {
                toast.error("Failed to laod data");
            });

            UserService.getAll().then(res =>{
                setPersons(res.data);
            })
    }

    const loadUsers = async() =>{
        const persons = await UserService.getAll();
        setPersons(persons?.data);
    }

    const selectClickHandler = (event, person) =>{
        history.push({
            pathname: `/userForm`,
            state: {user: person}
        });
    }

    const addNewRecord = () => {
        if(persons){
            const newPerson = {
                id: 11,
                name: "test ",
                username: "test",
                email: "test@email.com",
                phone: "123456789",
                website: "test.com",
                address: {
                    street: "test street",
                    city: "test city"
                }
            };
            setPersons([...persons, newPerson]);
        }
    }

    const deleteClickHandler = (event, id) =>{
        UserService.remove(id).then(res=>{
            //alert(res?.data.message);
            toast.success(res?.data?.message, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
            });
            loadUsers();
        })
    }

    return(
        <div className="container">
            <h3>Persons page.</h3>
            {/* <button className="btn btn-secondary btn-sm" style={{float: "left"}} onClick={addNewRecord}>Insert</button> */}
            <Link to="/userForm" className="btn btn-primary btn" style={{float: "left"}}><AiOutlineUserAdd/></Link>
            <table className="table w-100">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Select</th>
                        <th>Del.</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       persons.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td><button className="btn btn-success btn-sm" onClick={(event) => selectClickHandler(event, item)}><AiFillEdit /></button></td>
                                <td><button className="btn btn-danger btn-sm" onClick={(event) => deleteClickHandler(event, item?.id)}><AiFillDelete /></button></td>
                            </tr>
                        );
                       })
                    }
                </tbody>
            </table>
            <p>{person?.name}</p>
        </div>
    );

};

export default UserPage;