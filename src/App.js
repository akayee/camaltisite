
import './App.css';
import Header from './components/Header';
import Home from './screens/Home';
import ProductList from './screens/ProductList';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PageNotFound from './screens/PageNotFound';
import Footer from './components/Footer';
import About from './screens/About';
import Contact from './screens/Contact';
import Cart from './screens/Cart';
import ProductDetail from './screens/ProductDetail';


const routes = [
  {
    exact:true,
    path: "/",
    component: Home
  },
  {
    path: "/productlist",
    component: ProductList
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/contact",
    component: Contact
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/productdetail",
    component: ProductDetail
  },
  {
    path:"*",
    component:PageNotFound
  }
];
function RouteWithSubRoutes(route) {
  return (
    <Route
      exact={route.exact}
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
function App() {
  return (
    <div  >
      <Router>
      <Header />
        <Switch>
          
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
