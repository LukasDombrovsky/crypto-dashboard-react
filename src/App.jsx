import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/navigationBar/navigationBar';
import Main from './pages/main/main';
import Forecast from './pages/forecast/forecast';
import ErrorPage from './error-page';
import Footer from './components/footer/footer';
import Section from './components/section/section';

import './App.scss';

function App() {
  return (
    <>
      <NavigationBar
        brand='Crypto Dashboard'
        homeLink='/'
        links={[
          { type: 'redirect', name: 'forecast' },
          { type: 'scroll', name: 'contact' },
        ]}
        colors={{
          static: { backgroundColor: '#282828', textColor: 'white' },
          dynamic: { backgroundColor: 'white', textColor: '#282828' },
        }}
      />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/forecast' element={<Forecast />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Section id='contact' backgroundColor='black' narrow-width>
        <Footer />
      </Section>
    </>
  );
}

export default App;
