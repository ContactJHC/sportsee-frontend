

export default class PerformancesDataFormater {
    constructor(performances) {
        this.perfScore = []
        const kindPerf = this.kindOfPerformance()
        performances.forEach((e,i) => {
            this.perfScore.push(
                {value : e.value, kind : kindPerf[i+1]}
            )
        })
    }

    kindOfPerformance() {
        return {
                1: 'Cardio',
                2: 'Énergie',
                3: 'Endurance',
                4: 'Force',
                5: 'Vitesse',
                6: 'Intensité'
            }

    }
}