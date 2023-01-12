import React from 'react'
import ReactDOM from 'react-dom'
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    const inputStyle = 'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
    const labelStyle = 'absolute capitalize text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'

    return (
        <div className="relative w-full z-0">
            <input className={inputStyle} {...field} {...props} />
            <label htmlFor={props.id || props.name} className={labelStyle}>{label}</label>
            {meta.touched && meta.error ? (
                <div className="mt-2 text-xs text-red-600 dark:text-red-400">{meta.error}</div>
            ) : null}
     </div>
    )
}
const Select = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    const inputStyle = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
    const labelStyle = 'capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white'

    return (
        <div>
            <label htmlFor={props.id || props.name} className={labelStyle}>{label}</label>
            <select className= {inputStyle}{...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
     </div>

    )
}

const TicketForm = () => {
    return(
        <Formik
            initialValues={{
                title: '',
                description: '',
                priority: '1',
                progress: '0',
                category: '',
                status: '',
            }}
            validationSchema={
                Yup.object({
                    title: Yup.string()
                    .max(256, 'Must be 256 characters or less')
                    .required('Required'),
                    description: Yup.string()
                    .max(256, 'Must be 256 characters or less')
                    .required('Required'),
                    priority: Yup.number()
                        .required('Required')
                        .min(1)
                        .max(5)
                        .integer(),
                    progress: Yup.number()
                        .required('Required')
                        .min(0)
                        .max(100)
                        .integer(),
          })}
           onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
            }, 400)
        }}>
            <Form className="flex flex-col justify-start items-start gap-y-6">
                   <TextInput
                        label="Title"
                        name="title"
                        type="text"
                        placeholder=" "
                    />
                    <TextInput
                        label="Description"
                        name="description"
                        type="text"
                        placeholder=" "
                    />
                    <TextInput
                        label="Priority"
                        name="priority"
                        type="number"
                        placeholder="1"
                    />
                    <TextInput
                        label="Progress"
                        name="progress"
                        type="number"
                        placeholder="0"
                    />
            </Form>
        </Formik>
    )

}

export default TicketForm