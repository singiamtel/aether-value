import './Login.css';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Link, useHistory } from "react-router-dom";
import { login } from "../../api/getEndpoints"
import {IoLogInOutline} from "react-icons/io5"
import Quotes from '../Quotes';

interface Values {
	username:string,
	password: string
}

function Login() {
	let history = useHistory();
  	const handleSubmit = async (values: Values, { setSubmitting }: FormikHelpers<Values> ) => {
    if(await login(values.username, values.password)){
      console.log("login successful");
      setTimeout(() => {
        history.push("/home")
        history.go(0)
        setSubmitting(false)
      }, 500)
    }
    else{
      console.log("login failed");
    }
  }
  return (
	<div className="loginContainer flex justify-center items-center flex-col">
			<img className="logo" src="/logo_white.png" alt="logo" />
			<div className="box rounded-2xl shadow-2xl">
				<h1 className="font-sans text-3xl text-center p-10">
					<b>Welcome.</b> Please, sign in.
				</h1>
				<div>
					<Formik 
						initialValues={{
							username:"",
							password:""
						}}
						
						onSubmit={handleSubmit}
					>	
						<Form className="flex flex-col items-center">
							<p className={"px-4 py-2 text-black flex flex-col items-start w-3/4"}>
							<label className="text-sm font-bold p-1" htmlFor="username">Username </label>
							<Field className="border p-2 w-full" name="username" placeholder="" />
							</p>

							<p className={"px-4 py-2 text-black flex flex-col items-start w-3/4"}>
							<label className="text-sm font-bold p-1" htmlFor="password">Password </label>
							<Field className="border p-2 w-full" type="password" name="password" placeholder="" />
							</p>

							<p className={"px-4 py-3 text-black flex justify-center w-3/4"}>
								<button className="flex justify-center items-center button p-2 text-white" type="submit">
									<p className="text-xl">Sign In</p>
								</button>
							</p>
						</Form>
						
					</Formik>
				</div>	
				<h1 className="font-sans text-ls text-center p-3">
					Need an account? 
					<Link to="/register">
				
					<b> Register.</b>
				
					</Link>
				</h1>
			</div>
		</div>

)

}
export default Login;
