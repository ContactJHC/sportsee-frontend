import ScoreModel from "./ScoreModel";
import './Score.css'

export default function Score() {

const data = [
    {
        name: 'Pourcentage',
        valeur: 12,
    }
]

  return (
    <div id='scoreContainer' >
      {/* style={{backgroundColor:'#FBfbFb', width:'500px', height:'500px', border:'solid red 10px', position:'absolute', top:'150px', left:'150px'}}> */}
        <ScoreModel />
        <div id='scoreTitle'>Score</div>
        <div id="scoreSummary">
          <div id='scorePct'>{data[0].valeur}%</div>
          <div id='scoreText'>de votre <br/>objectif</div>
        </div>
        
    </div>
  )
}
