import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const schema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
    number: Yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
});

const initialValues = {
    name: '',
    number: '',
};

const ContactForm = ({ onAdd }) => {
    const nameId = useId();
    const numberId = useId();

    const handleSubmit = (values, actions) => {
        onAdd(values);
        actions.resetForm();
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
            <Form className={css.form}>
                <div className={css.fields}>
                    <div className={css.field}>
                        <label className={css.label} htmlFor={nameId}>Name</label>
                        <Field className={css.input} type="text" name="name" id={nameId} />
                        <ErrorMessage className={css.error} name="name" component="span" />
                    </div>

                    <div className={css.field}>
                        <label className={css.label} htmlFor={numberId}>Number</label>
                        <Field className={css.input} type="text" name="number" id={numberId} />
                        <ErrorMessage className={css.error} name="number" component="span" />
                    </div>
                </div>

                <button className={css.button} type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;
