import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

// Formik has built-in components
// * Form replaces a normal form element
// * Field replaces any type of input element
// * ErrorMessage, this doesn't really replace any controls that you have
/// but is a great component that given the attribute name is able to show your error message
/// KEY: no need for the custom: error message && <span>{errors.name}</span>
/// KEY: no need for onChange attribute:  onChange={handleChange}

const FormikError = () => (
  <Formik
    initialValues={{ name: '', address: '', email: '' }}
    onSubmit={(values) => console.log('submitting ', values)}
    validate={(values) => {
      let errors = {}
      if (!values.name) {
        errors.name = 'Name is required'
      }
      if (!values.address) {
        errors.address = 'Address is required'
      }
      if (!values.email) {
        errors.email = 'Email is required'
      }

      return errors
    }}
  >
    {({ values, handleSubmit }) => (
      <Form onSubmit={handleSubmit}>
        <div>
          <Field
            name="name"
            type="text"
            placeholder="Name"
            value={values.name}
          />
          <ErrorMessage name="name" />
        </div>
        <div>
          <Field
            name="address"
            type="text"
            placeholder="Address"
            value={values.address}
          />
          <ErrorMessage name="address" />
        </div>
        <div>
          <Field
            name="email"
            type="text"
            placeholder="email"
            value={values.email}
          />
          <ErrorMessage name="email" />
        </div>

        <button data-cy="submit">Submit</button>
      </Form>
    )}
  </Formik>
)

export default FormikError
