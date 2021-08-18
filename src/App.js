import Navbar from "./components/sections/navbar/Navbar"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import About from "./pages/about/About";
import Service from "./pages/service/Service";
import Quote from "./pages/quote/Quote";
import Home from "./pages/home/Home";
import Faq from "./pages/faq/Faq";

const  App = () =>  {
  return (
    <Router>
        <Navbar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/service' component={Service} />
            <Route path='/quote' component={Quote} />
            <Route path='/faq' component={Faq} />
        </Switch>

    </Router>
  );
}

export default App;
