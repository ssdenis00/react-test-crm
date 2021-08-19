import { FC } from 'react';
import Menu from '../Menu/Menu';
import './Main.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from '../Search/Search';
import News from '../News/News';

const Main: FC = () => {
  return (
    <main className="main">
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/">
            <News />
          </Route>
          <Route path="/address">
            <Search />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  )
}

export default Main;