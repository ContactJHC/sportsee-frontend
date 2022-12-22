let mock = process.env.REACT_APP_DEVELOPMENT

/**
 * Returns user fetched datas from a call to the database
 * @returns {array} userMainDatas 
 */
   

export const fetchMainData = async (userId) => {
    if (mock) {
      try {
        const userMainDatas = await fetch(`data/data.json`)
          .then((res) => res.json())
          .then((data) => data.USER_MAIN_DATA)
        return (
          userMainDatas.filter((el) => el.id + '' === userId)[0]
        )
      } catch (err) {
        console.log(err);
        return null
      }
    } else {
      try {
        const userMainDatas = await fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`)
          .then((res) => res.json())
          .then((data) => data)
        return userMainDatas.data
      } catch (err) {
        console.log(err);
        return null
      }
    }
  }

  export const fetchActivityData = async (usId) => {
    if (mock) {
      try {
        const userActivityData = await fetch(`data/data.json`)
          .then((res) => res.json())
          .then((data) => data.USER_ACTIVITY)
        return userActivityData.filter((el) => el.userId === usId)[0]
      } catch (err) {
        console.log(err);
        return null
      }
    } else {
      try {
        const userActivityData = await fetch(`${process.env.REACT_APP_API_URL}/user/${usId}/activity`)
          .then((res) => res.json())
          .then((data) => data)
        return userActivityData.data
      } catch (err) {
        console.log(err);
        return null
      }
    }
  }

  export const fetchSessionsData = async (usId) => {
    if (mock) {
      try {
        const userSessionData = await fetch(`data/data.json`)
          .then((res) => res.json())
          .then((data) => data.USER_AVERAGE_SESSIONS)
        return userSessionData.filter((el) => el.userId + '' === usId)[0]
      } catch (err) {
        console.log(err);
        return null
      }
    } else {
      try {
        const userSessionData = await fetch(`${process.env.REACT_APP_API_URL}/user/${usId}/average-sessions`)
          .then((res) => res.json())
          .then((data) => data)
        return userSessionData.data
      } catch (err) {
        console.log(err);
        return null
      }
    }
  }
   
  export const fetchPerformanceData = async (usId) => {
    if (mock) {
      try {
        const userPerformanceData = await fetch(`data/data.json`)
          .then((res) => res.json())
          .then((data) => data.USER_PERFORMANCE)
        return (
          userPerformanceData.filter(
            (el) => el.userId + '' === usId)[0])
      } catch (err) {
        console.log(err);
        return null
      }
    } else {
      try {
        const userPerformanceData = await fetch(`${process.env.REACT_APP_API_URL}/user/${usId}/performance`)
          .then((res) => res.json())
          .then((data) => data)
        return userPerformanceData.data
      } catch (err) {
        console.log(err);
        return null
      }
    }
  }
    