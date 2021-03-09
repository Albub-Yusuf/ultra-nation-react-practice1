
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import CountryDeatils from './components/CountryDetails/CountryDeatils';

function App() {
  return (
    
   <Router>
     <Switch>
       <Route path="/home">
         <Home></Home>
       </Route>
       <Route  exact path="/">
        <Home></Home>
       </Route>
       <Route path="/country/:cname">
         <CountryDeatils></CountryDeatils>
       </Route>
       <Route path="*">
         <NotFound></NotFound>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
