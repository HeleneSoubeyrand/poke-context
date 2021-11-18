import { BrowserRouter, Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Nav from './components/Nav'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;