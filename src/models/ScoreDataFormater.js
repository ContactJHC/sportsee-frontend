export default class ScoreDataFormater {
    constructor(score)  {
        this.dataScore = [
            {
              name: 'Pourcentage',
              valeur: score.todayScore * 100
            }
          ]
    }
}