import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import FormikCombobox from '../formikCombobox/FormikCombobox';
import FormikCheckbox from '../formikCheckbox/FormikCheckbox';
import FormikInputText from '../formikInputText/FormikInputText';
import FormikTextArea from '../formikTextArea/FormikTextArea';

function CreateBeerFormik() {
    const beerTypes = ['', 'Ale', 'Lager', 'Stout'];
    const validationSchema = yup.object().shape({
        beerName: yup.string().required(),
        beerType: yup.string().required(),
        ingredients: yup.string().required()
    });
    return (
        <Formik
            initialValues={{beerName: '', beerType: beerTypes[0], hasCorn: false, ingredients: ''}}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log('submitting', values);
            }}
        >
        {(FormikProps) => (
            <form onSubmit={FormikProps.handleSubmit}>
                <h1>Beer form</h1>
                <FormikInputText label="Beer name:" name="beerName"/>
                <FormikCombobox label="Beer type:" elements={beerTypes} name="beerType"/>
                <FormikCheckbox label="Has corn" name="hasCorn"/>
                <FormikTextArea label="Ingredients" name="ingredients"/>
                <button type="submit" disabled={!(FormikProps.isValid && FormikProps.dirty)}> Submit </button>
            </form>
        )}
        </Formik>
    );
}

export default CreateBeerFormik;