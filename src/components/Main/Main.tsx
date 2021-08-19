import { FC } from 'react';
import Menu from '../Menu/Menu';
import './Main.css';
import { Route, Switch } from 'react-router-dom';
import Search from '../Search/Search';
import News from '../News/News';

const Main: FC = () => {
  return (
    <main className="main">
      <Menu />
      <Switch>
        <Route exact path="/">
          <News />
        </Route>
        <Route path="/address">
          <Search />
        </Route>
      </Switch>
    </main >
  )
}

export default Main;