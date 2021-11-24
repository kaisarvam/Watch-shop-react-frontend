
import { BrowserRouter ,Switch ,Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Register from './Components/Pages/Register/Register';
import PrivateRoute from './Components/Pages/Login/PrivateRoute/PrivateRoute';
import Faq from './Components/Pages/Faq/Faq';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import NotFound from '../src/Components/Pages/NotFound/NotFound';
import AllProductsFullPage from './Components/Pages/AllProductsFullPage/AllProductsFullPage';
import PurchasePage from './Components/Pages/PurchasePage/PurchasePage';
import Dashbord from './Components/Dashbord/Dashbord';

function App() {
  return (
    <div className="App">
<AuthProvider>
      <BrowserRouter>

      <Switch>

        <Route exact path="/">
          <Home/>
          </Route>

          <Route path="/home">
          <Home/>
          </Route>

          <Route path="/faq">
            <Faq/>
            </Route>

            <Route path="/about">
              <AboutUs/>
              </Route>

          <Route path="/allProducts">
        <AllProductsFullPage/>
          </Route>

          <PrivateRoute path="/purchase/:id">
            <PurchasePage/>
            </PrivateRoute>

            <PrivateRoute path="/dashbord">
              <Dashbord/>
              </PrivateRoute>


        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/register">
          <Register/>
        </Route>

        <Route path="*">
          <NotFound/>
        </Route>

      </Switch>
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
