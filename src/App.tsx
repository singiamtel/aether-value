import {  Redirect, Switch, Route } from "react-router-dom";
import Home from "./Home"
import Login from "./Login"
import Register from "./Register"
import Transaction from "./components/Transactions"

function App() {
    console.log(sessionStorage.getItem("token"))
  if(sessionStorage.getItem("token") !== null){
  return (
    <div className={"h-full w-full"}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/home" component={Home} />
        <Route path="/transactions" component={Transaction} />
        <Route path="/login" component={Login} />
        <Route path="*"> </Route>
      </Switch>
    </div>
  )
  }
  return (
      <>
        <Route path={["/login", "/"]}>
          <Redirect from="/" to="/login" />
          <Login/>
        </Route>
        <Route path="/register" component={Register} />
      </>
  )}
export default App;
