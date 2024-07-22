import React,{useState} from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import api from '../service/api';
import Card from "./card";


const EmployeeForm = () =>{

    const initialValues = {
        empId:Math.random()* 1000,
        name:'',
        email:'',
    };
    const [cards, setCards] = useState([
        { title: 'Card 1', content: 'This is the first card' },
        { title: 'Card 2', content: 'This is the second card' },
      ]);

    const validationSchmema = Yup.object({
        name: Yup.string().required('Name is required'),
        email:Yup.string().required('Email is required')
    });

    const onSubmit = async (values, {resetForm}) =>{
        console.log('onsubmit',values);
       // addEmployee(values);

       await api.addEmployee(values);

        resetForm();
    }

    return(
        <div>
            <h2>Add Employee</h2>
            <Formik initialValues={initialValues}
                    validationSchema={validationSchmema}
                    onSubmit={onSubmit}>
                    <Form>
                        <div>
                            <label htmlFor="name">Name</label>
                            <Field type="text" id="name" name="name"></Field>
                            <ErrorMessage name="name" component="div"/>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field type="text" id="email" name="email"></Field>
                            <ErrorMessage name="email" component="div"/>
                        </div>
                        <button type="submit">Add</button>
                    </Form> 

            </Formik> 

            {cards.map((card, index) => (
        <Card key={index} title={card.title} content={card.content}>
          {card.children}
        </Card>
      ))}

        </div>
    )
}

export default EmployeeForm;
