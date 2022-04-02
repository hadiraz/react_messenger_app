import './assets/app.css';
import { Redirect, Route, Switch } from 'react-router-dom'
import Login from './components/Login';
import AuthContext from './context/AuthContext';
import Chat from "./components/Chat"
function App() {
  return (
    <AuthContext>
      <section className="app_container">
          <Switch>
              <Route path="/login" component={Login}/>
              <Route path="/chat" component={Chat}/>
              <Route path="" component={Login} />
          </Switch>
      </section>
    </AuthContext>
  );
}

export default App;
