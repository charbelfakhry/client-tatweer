import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import {BiPhoneCall} from "react-icons/bi"

const DesktopNotification = () => {
    const [permission, setPermission] = useState('default');

    useEffect(()=>{
        // request permission for desktop notifications.
        if('Notification' in window)
        {
            Notification.requestPermission().then(permission => {
                console.log(permission);
                setPermission(permission);
            })
        }
    }, []);


    const showNotification = () =>{
        if(permission === 'granted')
        {
            console.log("Reached")
            const notificationOptions = {
                body: 'you have an incoming call',
                //icon: process.env.PUBLIC_URL + '/call.jpg'
            };

            new Notification('Incoming Call', notificationOptions);
        }
    }

    return(
        <>
            <div>
                <div className="container">
                    <button className="btn btn-primary" onClick={() => showNotification()}>
                        <BiPhoneCall />
                    </button>
                </div>
            </div>
        </>
    )
}

export default DesktopNotification;