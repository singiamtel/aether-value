import Sidebar from './Sidebar/Sidebar';
import Topbar from './Topbar/Topbar';
import './Settings.css';
import { Formik, FormikHelpers, Form, Field } from 'formik';
import { updateSettings } from '../store/action-creators';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store/store';
import { useState } from 'react';


interface Values {
	dollarsHour: number
}


function Settings() {

    const dispatch = useDispatch()
    const { updateSettings } = bindActionCreators(actionCreators, dispatch)

    
    const [test, testChange] = useState("")

  return (
    <div className="Settings">
      {/* Sidebar */}
      <div className="Sidebar">
        <Sidebar activeElement=""/>
      </div>

      <header className="Topbar">
        <Topbar/>
      </header>
      {/* Main */}
      <div className="Main p-7 ">

        <div className="optionsTitle">
            <h1 className="text-center text-3xl">Settings</h1>
        </div>

        {/* List of options */}
        <div className="grid grid-cols-5 mt-4">
            {/* Money to time conversion rate */}
            <div className="col-span-1 options p-2">
                <Formik 
                initialValues={{dollarsHour:10}}
                onSubmit={(
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values> ) => {
                    updateSettings(values.dollarsHour,0)
                    testChange("Option has been successfully updated.")
                    /* alert("Changed succesfully") */
                    setTimeout(() => {
                        setSubmitting(false)
                    }, 500)
                    }}
                >	
                    <Form className="flex flex-col items-start ">
                        <p className={"px-4 py-2 text-white flex flex-col items-start"}>
                        <label className="text-xm font-bold text-left py-1" htmlFor="dollarsHour">Money to time conversion</label>
                        <label className="text-xs text-left py-1" htmlFor="dollarsHour">Choose the $/hour amount used in the calculation of the money to time conversion. </label>
                        <label className="text-xs text-left py-1" htmlFor="dollarsHour">Default value: 10 $/Hour </label>
                        <Field className="border my-1 w-2/3 text-black" name="dollarsHour" placeholder="10 $/Hour" />
                        <label className="text-xs text-left font-bold py-1" htmlFor="dollarsHour">{test}</label>
                        <button className="submitButton text-black text-left px-5 py-1 my-1" type="submit">
                            <p className="text-xm">Set</p>
                        </button>
                        </p>
                    </Form>
                </Formik>
            </div>
        </div>

         

      </div>

    </div>
  );
}
export default Settings;
