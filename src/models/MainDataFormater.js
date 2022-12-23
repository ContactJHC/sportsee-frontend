export default class MainDataFormater {
    constructor(preData)  {
      this.dataScore = [
          {
            name: 'Pourcentage',
            valeur: preData.todayScore * 100
          }
        ]
      this.name = preData.userInfos.firstName
      this.calorie = preData.keyData.calorieCount
      this.protein = preData.keyData.proteinCount
      this.carbohydrate = preData.keyData.carbohydrateCount
      this.lipid = preData.keyData.lipidCount
    }
}