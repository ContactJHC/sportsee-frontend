/**
 * Returns a formated array to be used from the 'fetchSessionData' returned data
 * @returns {array} - 
 */

export default class AverageTimeDataFormater {
    constructor(averageTimes) {
        this.dataAverage = averageTimes.sessions
    }
}