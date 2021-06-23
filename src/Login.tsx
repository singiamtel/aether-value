import './Login.css';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useHistory } from "react-router-dom";

interface Values {
	user:string,
	password: string
}

function Login() {
	let history = useHistory();
return (
	<div className="loginContainer">
		<div className="box rounded-3xl shadow-2xl">
			<img className="logo" src="/logo_white.png" alt="logo" />
			<h1 className="font-sans text-3xl text-center p-10">
				<b>Welcome.</b> Please, sign in.
			</h1>
			<div>
				<Formik 
					initialValues={{
						user:"",
						password:""
					}}
					
					onSubmit={(
					values: Values,
					{ setSubmitting }: FormikHelpers<Values> ) => {
					setTimeout(() => {
						history.push("/home");
						

						setSubmitting(false)
					}, 500)
					}}
				>	
					<Form className="flex flex-col items-center">
						<p className={"px-4 py-2 text-black flex flex-col items-start w-1/2"}>
						<label className="text-sm font-bold p-1" htmlFor="username">Username </label>
						<Field className="border p-2 w-full" name="username" placeholder="" />
						</p>

						<p className={"px-4 py-2 text-black flex flex-col items-start w-1/2"}>
						<label className="text-sm font-bold p-1" htmlFor="password">Password </label>
						<Field className="border p-2 w-full" type="password" name="password" placeholder="" />
						</p>

						<p className={"px-4 py-3 text-black flex justify-center w-1/2"}>
							<button className="button p-2 rounded-xl text-white" type="submit">Sign In</button>
						</p>
					</Form>
					
				</Formik>
			</div>	
			<h1 className="font-sans text-ls text-center p-3">
				Need an account? <b>Register.</b>
			</h1>
		</div>
	</div>
)

}
export default Login;