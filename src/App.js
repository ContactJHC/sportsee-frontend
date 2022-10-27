// LE CSS DE APP.CSS POUR TESTER DES CONFIGS DE CHART SPECIFIQUES
// import './App.css';

import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
// import ChartRadar from './components/ChartRadar/ChartRadar';
import Profile from './pages/profile/Profile';


function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Profile />
      {/* Ci-dessous, les divz paramétrées pour afficher les diagrammes */}
      {/* <div style={{width:'500px', height:'500px', border:'solid red 10px', position:'absolute', top:'150px', left:'150px'}}>
        <ChartRadarModel />
      </div> */}
      {/* <div style={{width:'500px', height:'500px', border:'solid red 10px', position:'absolute', top:'150px', left:'700px'}}>
        <ChartRadar />
      </div> */}
    </div>
  );
}

export default App;
