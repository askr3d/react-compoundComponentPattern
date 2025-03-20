import '../styles/styles.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {
    
  return (
    <div>
        <h1>Register Formik Page</h1>

        <Formik
            initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: ''
            }}
            onSubmit={(values) => {
                console.log(values);
            }}
            validationSchema={
                Yup.object({
                    name: Yup.string()
                        .min(2, 'Debe de tener mas de 2 caracteres')
                        .max(15, 'Debe de ser menor a 15 caracteres')
                        .required('Requerido'),
                    email: Yup.string()
                        .email('Correo No Valido')
                        .required('Requerido'),
                    password1: Yup.string()
                        .required('Requerido')
                        .min(6, 'Debe ser minimo de 6 caracteres'),
                    password2: Yup.string()
                        .required('Requerido')
                        .oneOf([Yup.ref('password1')], 'Las contraseñas deben de coincidir')
                })
            }
        >
            {
                (formik) => (
                    <Form>
                        <MyTextInput label='Nombre' name='name' placeholder='askr3d' />
                        <MyTextInput label='Email' name='email' placeholder='email' />
                        <MyTextInput label='Password' name='password1' type='password' placeholder='Password' />
                        <MyTextInput label='Confirm Password' name='password2' type='password' placeholder='Repeat password' />
                        {/* <label htmlFor="name">Name</label>
                        <Field name="name" type="text" />
                        <ErrorMessage name='name' component="span" />

                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name='email' component="span" />

                        <label htmlFor="password1">Password</label>
                        <Field name="password1" type="password" />
                        <ErrorMessage name='password1' component="span" />

                        <label htmlFor="password2">Repeat Password</label>
                        <Field name="password2" type="password" />
                        <ErrorMessage name='password2' component="span" /> */}
                        
                        <button type='submit'>Submit</button>

                        <button type='button' onClick={() => formik.resetForm()}>Reset Form</button>
                    </Form>
                )
            }
        </Formik>
    </div>
  )
}
