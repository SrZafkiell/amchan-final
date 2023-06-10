import './App.css'
import { StoreProvider } from './assets/context/StoreProvider';
import { Routes, Route } from "react-router-dom";
import { NavBar } from './assets/components/NavBar/NavBar';
import { Home } from './assets/components/Pages/Home/Home';
import { NotFound } from './assets/components/Pages/NotFound/NotFound'
import { About } from './assets/components/Pages/About/About'
import { Account } from './assets/components/Pages/Account/Account'
import { Store } from './assets/components/Pages/Store/Store';
import { Reviews } from './assets/components/Pages/Reviews/Reviews';
import { ControlPanel } from './assets/components/Pages/ControlPanel/ControlPanel';
import Footer from './assets/components/Footer/Footer';

function App() {

  return (
    <>
      <NavBar />
      <StoreProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/ControlPanel" element={<ControlPanel />} />
          {/* <Route path="/" element={< />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </StoreProvider>
      <Footer />
    </>
  )
}

export default App
