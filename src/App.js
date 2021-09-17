import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './components/Pages/Main/MainPage';
import Timf from './components/Pages/Company/Timf';
import Partner from './components/Pages/Company/Partner';

import { BrowserRouter, Switch } from 'react-router-dom';

import {Route} from 'react-router-dom';

//라우터는 app에만 있어야 하는건가 
const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={MainPage} exact={true}></Route>
          <Route path="/company/timf" component={Timf}></Route>
          <Route path="/company/partner" component={Partner}></Route>
          {/* <Route path="/profile/:username/:testtest" component={Profile}/> */}  
          <Route
            render={
              ({location}) => (
                <div>
                  <h2>이 페이지는 존재하지 않습니다</h2>
                  <p>{location.pathname}</p>
                </div>
              )
            }
          ></Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;