import React, { Component } from 'react';
import { Formik } from 'formik';

export default class form extends Component{

    handleSubmit = (values) => {
        console.log(values)
    }

    handleRules = (values) => {

        let errors = {}

        if(!values.name){
            errors.name = "Required"
        }

        if(!values.lastname){
            errors.lastname = "Required"
        }

        if(!values.age){
            errors.age = "Required"
        }else if(values.age < 15){
            errors.age = "Sorry you need to be older"
        }

        return errors;

    }

    render(){
        return (
            <div>
                <h1>add user</h1>
                <Formik
                    initialValues={{name:'',lastname:'',age:''}}
                    validate={ (values) => this.handleRules(values) }
                    onSubmit={ (values) => this.handleSubmit(values) }
                >
                    {({errors, values, handleSubmit, handleChange}) => (
                        <form onSubmit={handleSubmit}>

                        <div className="form-group">
                            <label>Name</label>
                            <input 
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter name"
                            value={values.name}
                            onChange={handleChange}
                            />
                            {errors.name ? 
                            <div>{errors.name}</div>
                            : null}
                        </div>
    
                        <div className="form-group">
                            <label>LastName</label>
                            <input 
                            type="text"
                            className="form-control"
                            name="lastname"
                            placeholder="Enter Lastname"
                            value={values.lastname}
                            onChange={handleChange}
                            />
                            {errors.lastname ? 
                            <div>{errors.lastname}</div>
                            : null}
                        </div>
    
                        <div className="form-group">
                            <label>Age</label>
                            <input 
                            type="text"
                            className="form-control"
                            name="age"
                            placeholder="Enter age"
                            value={values.age}
                            onChange={handleChange}
                            />
                            {errors.age ? 
                            <div>{errors.age}</div>
                            : null}
                        </div>
    
                        <button type="submit" className="btn btn-primary">Submit</button>
    
                    </form>
                    )}
                </Formik>

                
            </div>
        )
    }
} 