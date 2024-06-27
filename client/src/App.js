import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/shared/Layout/Layout'
import { publicRoutes } from './routes/publicRoutes'
import NTT from './screens/NTT/NTT';


function App() {
  return (
    <div className="App">
      <Layout>
      <div className="main">
        <Routes>
          {/* <Route path="/"  /> */}
          {publicRoutes}
          <Route path="law">
            <Route path="wordsandphrases"  />
          </Route>
          <Route path="torrents"  />
          <Route path="mathematics" >
            <Route path="trigonometry"  />
            <Route path="abstractalgebra"  />
            <Route path="linearalgebra"  />
            <Route path="calculus"  />
          </Route>
          <Route path="torrents"  />
          <Route path="ntt" element={<NTT />} />
          <Route path="rpgtools" >
            <Route path="aliens"  />
          </Route>
        </Routes>
      </div>
      </Layout>
    </div>
  );
}

export default App;
