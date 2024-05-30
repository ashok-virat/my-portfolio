import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './Components/ReduxStore/Store';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./Components/Home'));

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
