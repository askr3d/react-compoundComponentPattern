import { ErrorMessage, useField } from "formik"

interface MyCheckboxProps {
    label: string
    name: string
    [x: string]: any
}

export const MyCheckbox = ({ label, ...props }: MyCheckboxProps) => {
    const [field] = useField({ ...props, type: 'checkbox' });
    
  return (
    <>
        <label>
            <input type="checkbox" className="text-input" { ...field } { ...props } />
            { label }
        </label>
        <ErrorMessage
            name={props.name}
            component='span'
            className="custom-span-error-class"
        />
    </>
  )
}
