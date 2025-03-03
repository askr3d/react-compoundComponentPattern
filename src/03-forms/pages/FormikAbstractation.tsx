import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyCheckbox, MyTextInput, MySelect } from '../components';

export const FormikAbstractation = () => {

  return (
    <div>
        <h1>Formik Abstractation</h1>
        
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: ''
            }}
            onSubmit={(values) => {
                console.log(values);
            }}
            validationSchema={
                Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Debe de tener 15 caracteres o menos')
                        .required('Requerido'),
                    lastName: Yup.string()
                        .max(10, 'Debe de tener 10 caracteres o menos')
                        .required('Requerido'),
                    email: Yup.string()
                        .email('Correo No Valido')
                        .required('Requerido'),
                    terms: Yup.boolean()
                        .oneOf([true], 'Debe de aceptar las condiciones'),
                    jobType: Yup.string()
                        .required('Requerido')
                        .notOneOf(['it-jr'], 'Esta opcion no es permitida')
                })
            }
        >
            {
                formik => (
                    <Form>
                        <MyTextInput label='First Name' name='firstName' placeholder='askr3d' />

                        <MyTextInput label='Last Name' name='lastName' placeholder='reeed' />

                        <MyTextInput label='Email Address' name='email' placeholder='askr3d@gmail.com' />

                        <MySelect label='Job Type' name="jobType">
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT Jr</option>
                        </MySelect>
                        
                        <MyCheckbox label='Terms and Conditions' name='terms' />
            
                        <button type='submit'>Submit</button>
                    </Form>
                )
            }
        </Formik>
    </div>
  )
}
