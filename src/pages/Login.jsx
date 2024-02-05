import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import instance from '../axios'
import { userAuthSuccess } from '../redux-toolkit/userAuth'
import { useDispatch } from 'react-redux'

const Login = () => {
    const dispatch = useDispatch()
    const [validated, setValidated] = useState(false)
    const navigate = useNavigate()
    const [inputsValue, setInputValues] = useState({
        email: '',
        password: ''
    })

    function handleIinputs(event) {
        const { name, value } = event.target
        setInputValues((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true)
        } else {
            setValidated(false)
            console.log(inputsValue);
            try {
                const response = await instance.post("user/login", {
                    ...inputsValue
                })
                if (response.data.success) {
                    dispatch(userAuthSuccess({
                        user: response.data.user,
                        isAuthenticated: response.data.isAuthenticated
                    }))
                    toast.success(response.data.message);
                    await new Promise((resolve) => setTimeout(resolve, 1000))
                    navigate("/")
                } else {
                    toast.error(response.data.message);
                }
            } catch (error) {
                toast.error(error.response.data.message);
            }
        }
    }
    return (
        <Container style={{ maxWidth: "700px", marginTop: "100px" }}>
            <ToastContainer />
            <h1 className='mb-5'>Login</h1>
            <Form onSubmit={handleOnSubmit} noValidate validated={validated}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required onChange={handleIinputs} value={inputsValue.email || ""} name="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required onChange={handleIinputs} value={inputsValue.password || ""} name="password" />
                </Form.Group>
                <Button variant="primary" type="submit" className='w-100'>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Login
