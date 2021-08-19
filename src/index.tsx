import ReactDOM from 'react-dom';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter basename={process.env.NODE_ENV === "development" ? "/" : "/build/"}>
    < App />
  </BrowserRouter >,
  document.getElementById('root')
);
