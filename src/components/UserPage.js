import React, {useState} from "react";
import { useEffect } from "react";
import axios from "axios";

//onCreation complete of this Component. The first method react useEffect

const UserPage = () => {

    const [persons, setPersons] = useState([]);
    const [person, setPerson] = useState(null);

    useEffect(() =>{
        loadUsersFromExternalAPI();
    }, []);

    const loadUsersFromExternalAPI = async() =>
    {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                setPersons(persons);
            }).catch(err => {
                console.log(err);
            });
    }

    const selectClickHandler = (event, person) =>{
        console.log(event.target);
        console.log(person);
        setPerson(person);
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

    return(
        <div className="container">
            <h3>Persons page.</h3>
            <button className="btn btn-secondary btn-sm" style={{float: "left"}} onClick={addNewRecord}>Insert</button>
            <table className="table w-100">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Address</th>
                        <th>Select</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       persons.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.website}</td>
                                <td><span className="text-success">{item.address.street}, {item.address.city}</span></td>
                                <td><button className="btn btn-primary btn-sm" onClick={(event) => selectClickHandler(event, item)}>Select</button></td>
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