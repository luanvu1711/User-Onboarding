import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const NoteForm = props => {
    const { touched, errors } = props;

    return (
        <Form>
            <label htmlFor="name">Name:</label>
            <Field name="name" placeholder="Please enter your name" />
            {touched.name && errors.name ? (
                <span className="error">{errors.name}</span>
            ) : null}

            <label htmlFor="email">Email: </label>
            <Field name="email" placeholder="Please enter your email" />
            {touched.email && errors.email ? (
                <span className="error">{errors.email}</span>
            ) : null}

            <label htmlFor="password">Password: </label>
            <Field
                name="password"
                placeholder="Please enter your password"
            />
            {touched.password && errors.password ? (
                <span className="error">{errors.password}</span>
            ) : null}

            <label htmlFor="tos">Read the TOS?</label>
            <Field name="tos" type="checkbox" />
            {touched.tos && errors.tos ? (
                <span className="error">{errors.tos}</span>
            ) : null}
            <label htmlFor="role">Role: </label>
            <Field
                className="select"
                name="role"
                component="select"
                placeholder="Please choose your role"
            >   
                <option value=" "></option>
                <option value="Web Developer">Web Developer</option>
                <option value="Data Scientist">Data Scientist</option>
                <option value="Software Engineer">Software Engineer</option>
            </Field>
            <button type="submit">Submit</button>
        </Form>
    );
};

export default withFormik({
    mapPropsToValues: props => {
        return {
            name: props.name || "",
            password: props.password || "",
            email: props.email || "",
            tos: props.tos || false,
            role: props.role || ""
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("Name is required"),
        password: Yup.string().required("Password is required"),
        email: Yup.string()
            .email("Email must be valid")
            .required("Must inlcluded email"),
        tos: Yup.boolean().oneOf([true], "Please check box")
    }),
    handleSubmit: (values, formikBag) => {
        formikBag.props.addNote({
            ...values,
            id: Date.now()
        });
        formikBag.resetForm();
    }
})(NoteForm);