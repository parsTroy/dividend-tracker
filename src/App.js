import './App.css';
import Header from './components/Header/Header';
import SubHeader from './components/SubHeader/SubHeader';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header className='header' />
        <SubHeader className='subHeader' />
        <Dashboard className='dashboard' />
        <Footer className='footer' />
      </div>
    </div>
  );
}

export default App;
