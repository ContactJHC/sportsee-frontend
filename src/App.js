import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Profile from './pages/profile/Profile'
import './App.css'

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
