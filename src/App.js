import Navbar from "./components/reusable/navbar/Navbar"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Service from "./pages/service/Service";
import Quote from "./pages/quote/Quote";

const  App = () =>  {
  return (
    <Router>
        <Navbar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/service' component={Service} />
            <Route path='/quote' component={Quote} />
        </Switch>

    </Router>
  );
}

export default App;
