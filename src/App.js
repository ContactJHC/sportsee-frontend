// LE CSS DE APP.CSS POUR TESTER DES CONFIGS DE CHART SPECIFIQUES
// import './App.css';

// import ChartAverageTimeModel from './components/ChartAverageTime/ChartAverageTimeModel';
// import ChartAverageTime from './components/ChartAverageTime/ChartAverageTime';
// import ChartScore from './components/ChartScore/ChartScore';
// import ChartScoreModel from './components/ChartScore/ChartScoreModel';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
// import Profile from './pages/profile/Profile';

import ScoreModel from './components/ChartScore/ScoreModel';

// import ChartRadar from './components/ChartRadar/ChartRadar';
// import ChartRadarModel from './components/ChartRadar/ChartRadarModel';
// import ChartDailyActivity from '../../components/ChartDailyActivity/ChartDailyActivity'
// import ChartDailyActivityModel from '../../components/ChartDailyActivity/ChartDailyActivityModel'



function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      {/* <Profile /> */}
      {/* Ci-dessous, les divz paramétrées pour afficher les diagrammes */}
      <div style={{backgroundColor:'#979797', width:'500px', height:'500px', border:'solid red 10px', position:'absolute', top:'150px', left:'150px'}}>
        <ScoreModel />
      </div>
      {/* <div style={{width:'500px', height:'500px', border:'solid red 10px', position:'absolute', top:'150px', left:'700px'}}>
        <ChartScoreModel />
      </div> */}
    </div>
  );
}

export default App;
