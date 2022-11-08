// LE CSS DE APP.CSS POUR TESTER DES CONFIGS DE CHART SPECIFIQUES
// import './App.css';

// import ChartAverageTimeModel from './components/ChartAverageTime/ChartAverageTimeModel';
// import ChartAverageTime from './components/ChartAverageTime/ChartAverageTime';
// import ChartScore from './components/ChartScore/ChartScore';
// import ChartScoreModel from './components/ChartScore/ChartScoreModel';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Profile from './pages/profile/Profile';
// import Spinner from './components/Spinner/Spinner';

// import Score from './components/ChartScore/Score';

// import ChartRadar from './components/ChartRadar/ChartRadar';
// import ChartRadarModel from './components/ChartRadar/ChartRadarModel';
// import ChartDailyActivity from '../../components/ChartDailyActivity/ChartDailyActivity'
// import ChartDailyActivityModel from '../../components/ChartDailyActivity/ChartDailyActivityModel'

// import GetData from './Services/Services'

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Profile />
      {/* <GetData /> */}
      {/* Ci-dessous, les divz paramétrées pour afficher les diagrammes */}
      {/* <div style={{backgroundColor:'#FBfbFb', width:'500px', height:'500px', border:'solid red 10px', position:'absolute', top:'150px', left:'150px'}}>
        <Spinner />
      </div> */}
      {/* <div style={{width:'500px', height:'500px', border:'solid red 10px', position:'absolute', top:'150px', left:'700px'}}>
        <ChartScoreModel />
      </div> */}
    </div>
  );
}

export default App;
