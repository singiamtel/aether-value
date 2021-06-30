import './Register.css';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Link, useHistory } from "react-router-dom";
import { register } from "../../api/getEndpoints"

interface Values {
	username:string,
	password: string
}

function Register() {
	let history = useHistory();
  const handleSubmit = async (values: Values, { setSubmitting }: FormikHelpers<Values> ) => {
    if(await register(values.username, values.password)){
      console.log("register successful");
      setTimeout(() => {
        history.push("/home");
        setSubmitting(false)
      }, 500)
    }
    else{
      console.log("register failed");
    }
  }
return (
	<div className="registerContainer">
		<div className="box rounded-2xl shadow-2xl">
			<img className="logo" src="/logo_white.png" alt="logo" />
			<h1 className="font-sans text-3xl text-center p-10">
				<b>Register.</b> Enter your data.
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
						<p className={"px-4 py-2 text-black flex flex-col items-start w-1/2"}>
						<label className="text-sm font-bold p-1" htmlFor="username">Choose your username </label>
						<Field className="border p-2 w-full" name="username" placeholder="" />
						</p>

						<p className={"px-4 py-2 text-black flex flex-col items-start w-1/2"}>
						<label className="text-sm font-bold p-1" htmlFor="password">Enter your password </label>
						<Field className="border p-2 w-full" type="password" name="password" placeholder="" />
						</p>

						<p className={"px-4 py-2 text-black flex flex-col items-start w-1/2"}>
						<label className="text-sm font-bold p-1" htmlFor="password">Repeat your password </label>
						<Field className="border p-2 w-full" type="password" name="password" placeholder="" />
						</p>

						<p className={"px-4 py-3 text-black flex justify-center w-1/2"}>
							<button className="button p-2 rounded-xl text-white" type="submit">Register</button>
						</p>
					</Form>
					
				</Formik>
			</div>	
			<h1 className="font-sans text-ls text-center p-3">
				Already have an account? 
				<Link to="/login">
			
				<b> Sign in.</b>
			
				</Link>
			</h1>
		</div>
	</div>
)

}
export default Register;
