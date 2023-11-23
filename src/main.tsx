import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import './main.css';
// import { getGithubUser } from './services/githubApi';
// const githubData = await getGithubUser('Buenno01');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Header />,
);
