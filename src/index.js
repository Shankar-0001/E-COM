import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import * as bootstrap from 'bootstrap';
// import { CustomDemo } from './components/custom-demo/custom-demo';
// import { CustomDemo2 } from './components/custom-demo/custom-grid2';
// import { CustomDemo3 } from './components/custom-demo/custom-grid3';
// import { Register } from './components/register/register';
// import { Login } from './components/Login/Login';
// import { FormicValidation } from './components/Form-Demo/formik-validation';
// import { DemoYup } from './components/Yup-Demo/yup-demo';
// import { HookForm } from './components/Hook-form/hook-form';
// import { PhoneDemoevent } from './components/D17-Synthetic-Event/iPhone-event';
// import { CalculatorEventDemo } from './components/D19-Calculator-Demo/CalculatorE-Demo';
// import { FormDemo } from './components/Form-Demo/form-demo';
// import { EventDemo } from './components/D17-Synthetic-Event/Disable-Button';
// import { FormBinding } from './components/class-binding-demo/classform-binding';
// import { XmlhttpBinding } from './components/XMLHttp-Binding/xmlhttp-binding';
// import App from './App';
// import { DataBinding } from './components/primitive-data-binding/data-binding';
// import { NDBinding } from './components/primitive-data-binding/number-dbinding';
// import {ConditionDB} from './components/primitive-data-binding/condition-databinding';
// import { ArrayDatabinding } from './components/NonPrimitiveD-binding/array-databinding1';
// import {StyleDemo} from './components/style-binding-demo/style-demo';
// import { ClassBinding } from './components/class-binding-demo/class-binding';
import { ReducerDemo } from './components/reducer-demo/reducer-demo';
import { UserLogin } from './class-components/user-login/user-login';
import { Fakestore } from './class-components/fakestore/fakestore';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ConditionDB/> */}
    {/* <ArrayDatabinding/> */}
    {/* <StyleDemo/> */}
    {/* <ClassBinding/> */}
    {/* <FormBinding/> */}
    {/* <XmlhttpBinding/> */}
    {/* <EventDemo /> */}
    {/* <PhoneDemoevent/> */}
    {/* <CalculatorEventDemo/> */}
    {/* <FormDemo/> */}
    {/* <FormicValidation /> */}
    {/* <DemoYup/> */}
    {/* <HookForm/> */}
    {/* <CustomDemo/> */}
    {/* <CustomDemo2/> */}
    {/* <CustomDemo3/> */}
    {/* <ReducerDemo/> */}
    {/* <UserLogin/> */}
    <Fakestore/>
  </React.StrictMode>
);

