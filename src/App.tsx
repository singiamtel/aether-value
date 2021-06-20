import { BrowserRouter, Redirect, Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home"
import Login from "./Login"
import Transaction from "./components/Transactions"



function App() {
  return (
    <BrowserRouter>
        <div className={"h-full w-full"}>
          <Redirect
            from="/"
            to="/home" />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/transactions" component={Transaction} />
            <Route path="*"> </Route>
          </Switch>
        </div>
    </BrowserRouter>
  )}
export default App;
