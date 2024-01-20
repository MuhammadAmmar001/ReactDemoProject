import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import SuccessModal from "../Modal";
import Alert from "react-bootstrap/Alert";
import style from '../cssModules/Login.module.css'


export default function Contact() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [query, setQuery] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const form = useRef();

    function submitHandler(event) {
        event.preventDefault();
        if (!name || !email || !query) {
            setShowAlert(true);
            return
        }
        setShowAlert(false)
        emailjs.sendForm('service_7z0rgk8', 'template_k1juk5l', form.current, 'FfKTUxszzsXv0n5z8')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setIsSubmitted(true)
        resetHandler(event);

    }
    function resetHandler(event) {
        event.preventDefault();
        setEmail('');
        setName('');
        setQuery('');
    }
    function showAlertForDuration(duration) {
        if (showAlert) {
            setTimeout(() => setShowAlert(false), duration)
        }
    }

    useEffect(() => {
        showAlertForDuration(2000)
    }, [showAlert])
    return (
        <>
            <Navbar />
            <h5 className="text-center text-secondary">Please Write Your Query, Our Team Will Contact You Shortly</h5>
            {showAlert && (
                <Alert key='danger' variant="danger">
                    Please fill all the fields
                </Alert>
            )}
            {isSubmitted ? <SuccessModal title="Message Sent Successfully" message="Thank You For Contacting Us." continueHandler={setIsSubmitted} /> :

                <div className="container">
                    <div className={`row vh-100 justify-content-center align-items-center ${style.animatedRow}`}>
                        <div className={`col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4 border border-white p-sm-4  border-5 rounded mb-lg-5 ${style.blurredBackground}`}>
                            <form ref={form}>
                                <div className="mb-3 text-white">
                                    <label htmlFor="name" className="form-label p-1">Name</label>
                                    <input type="text" className="form-control" name="name" id="name" required value={name} onChange={(e) => { setName(e.target.value) }} />
                                </div>
                                <div className="mb-3 text-white">
                                    <label htmlFor="InputEmail1" className="form-label p-1">Email address</label>
                                    <input type="email" className="form-control" name="email" id="InputEmail1" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <div className="text-white text-center">
                                    <label htmlFor="query" className="form-label">Query</label>
                                </div>
                                <div className="text-center">
                                    <textarea name="query" id="query" cols="30" rows="5" value={query} required onChange={(e) => setQuery(e.target.value)}> </textarea>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="m-2 btn btn-warning" onClick={submitHandler}>Submit</button>
                                    <button type="submit" className="p-2 btn btn-dark" onClick={resetHandler}>Reset</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </>

    )

}


