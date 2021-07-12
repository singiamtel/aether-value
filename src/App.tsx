import {  Redirect, Switch, Route } from "react-router-dom";
import Home from "./components/Home"
import Login from "./components/Login/Login"
import Register from "./components/Login/Register"
import TransactionsPage from "./components/Transactions/TransactionsPage"

function App() {

  if(sessionStorage.getItem("token") !== null){
  return (
    <div className={"h-full w-full"}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/home" component={Home} />
        <Route path="/transactions" component={TransactionsPage} />
        <Route path="/login" component={Login} />
        <Route path="*" component={Login} />
      </Switch>
    </div>
  )
  }
  return (
    <div className={"h-full w-full"}>
        <Route path="/" component={Login} exact />
        <Route path="/login" component={Login} />
        <Redirect from="/" to="/login" />
        <Route path="/register" component={Register} />
        <Redirect from="*" to="/login" />
    </div>
  )}
export default App;
