/**
 * Returns a formated array to be used from the 'fetchActivityData' returned data
 * @returns {array} - 
 */

export default class ActivityDataFormater {
    constructor(activity) {
        this.dataActivity = activity.sessions
    }
}