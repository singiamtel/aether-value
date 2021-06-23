import {  Redirect, Switch, Route } from "react-router-dom";
import Home from "./Home"
import Login from "./Login"
import Register from "./Register"
import Transaction from "./components/Transactions"

function App() {
    console.log(sessionStorage.getItem("token"));
  if(sessionStorage.getItem("token") === null){
  return (
    <>
      <Redirect to="/login" />
      <Login/>
    </>
  )
  }
  return (
        <div className={"h-full w-full"}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path={["/home", "/"]}>
              <Redirect from="/" to="/home" />
              <Home/>
            </Route>
            <Route path="/transactions" component={Transaction} />
            <Route path="*"> </Route>
          </Switch>
        </div>
  )}
export default App;
