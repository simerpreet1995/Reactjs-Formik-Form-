import React from 'react'
import {Formik, Form} from 'formik'
import TextField from './TextField'
import * as Yup from 'yup'


function Signup() {
  const validate = Yup.object({
    firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
    lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
    email: Yup.string()
    .email('Email is invalid')
    .required('Email is Required'),
    password: Yup.string()
    .min(6, 'Password must be at leats 6 characters')
    .required('Password is Required'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Confirm password is not same')
    .required('Confimr Password is Required'),
    phone: Yup.string()
    .max(10, 'Should not exceed more than 10 ')
    .min(10, 'Must be 10')
    .required('Phone number is required')
  })
  return (
    <Formik 
    initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: ''
    }}
    validationSchema={validate}
    onSubmit={values =>{
      console.log(values)
    }}
    >
        {formik => (
            <div>
                <h1 className="my-4 font-weight-bold-display-4">SignUp</h1>
                {/* {console.log(formik.values)} */}
                <Form>
  <TextField label="First Name" name="firstName" type="text" />
  <TextField label="Last Name" name="lastName" type="text" />
  <TextField label="Email" name="email" type="email" />
  <TextField label="Password" name="password" type="password" />
  <TextField label="Confirm Password" name="confirmPassword" type="password" />
  <TextField label="Phone" name="phone" type="number" />

              <button className="btn btn-dark mt-3" type='submit'>Register</button>
              <button className="btn btn-danger mt-3 mx-3" type='reset'>Reset</button>
                </Form>
            </div>
        )}
    </Formik>
  )
}

export default Signup