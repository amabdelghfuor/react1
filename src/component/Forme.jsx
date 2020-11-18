import React, { Component } from 'react';
import {Formik, Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';

class Forme extends Component{

    onSubmitval = (values) => {
        console.log(values);
    };
    formrun =(props)=>{
        return(
            <form   >
                <label>Name : </label>
                <Field name="name" />
                <ErrorMessage name="name"/>
                <br/>
                <label>Email : </label>
                <Field name="email" type="email"/>
                <ErrorMessage name="email"/>

                <br/>
                <label>password : </label>
                <Field name="password"  type="password"/>

                <br/>
                <label>type : </label>
                <Field name="type"  component="select">
                    <option value="mall">mall</option>
                    <option value="femall">femall</option>
                </Field>
                <ErrorMessage name="type"/>

                <br/>
                <label>Active : </label>
                <Field name="active"  type="checkbox"/>
                <br/>
                <label>Catigory : </label><br/>
                <Field name="catigory"  type="radio" value="1" />1<br/>
                <Field name="catigory"  type="radio" value="2" />2<br/>
                <ErrorMessage name="catigory"/>
                <br/>
                <label>facebook : </label>
                <Field name="soiale.facebook" />
                <ErrorMessage name="soiale.facebook"/>
                <br/>
                <label>twittar : </label>
                <Field name="soiale.twittar" />
                <ErrorMessage name="soiale.twittar"/>
                <br/>
                <br/>
                <button  type="submit" >send</button>
            </form>
        );
    };
    schema=()=>{
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().required(),
            type: Yup.string().required(),
            catigory: Yup.string().required(),
            soiale : Yup.object().shape({
                facebook: Yup.string().required('aagggggggggggg'),
                twittar: Yup.string().required('utofdsosclzoatu'),
            }),
        });
        return schema;
    };
    render(){
        return<>
            <Formik
            initialValues={{
            name:"",
            email:"",
            password:"",
            type:"",
            active:false,
            catigory:false,
            soiale:{
                facebook:"",
                twittar:"",
                }
            }}
            onSubmit={this.onSubmitval}
            render={this.formrun}
            validationSchema={this.schema()}
            />
        
        </>
    };
};
export default Forme;