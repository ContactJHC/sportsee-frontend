let mock = process.env.REACT_APP_DEVELOPMENT

/**
 * Returns one's user filtered by ID fetched datas from a call to the database, according to different endpoints
 * @returns {array} - 
*/
   

const fetchMainData = async (userId) => {
    if (mock) {
      try {
        const userMainDatas = await fetch(`data/data.json`)
          .then((res) => res.json())
          .then((data) => data.USER_MAIN_DATA)
        console.log('passage en "mock true" ')
        return (
          userMainDatas.filter((el) => el.id + '' === userId)[0]
        )
      } catch (err) {
        console.log(err);
        return err
      }
    } else {
      try {
        const userMainDatas = await fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`)
          .then((res) => res.json())
          .then((data) => data)
        console.log('passage en "mock false" ');
        return userMainDatas.data
      } catch (err) {
        console.log(err, 'on est bien passé là');
        return
      }
    }
  }

const fetchActivityData = async (usId) => {
    if (mock) {
      try {
        const userActivityData = await fetch(`data/data.json`)
          .then((res) => res.json())
          .then((data) => data.USER_ACTIVITY)
        return userActivityData.filter((el) => el.userId + '' === usId)[0]
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

const fetchSessionsData = async (usId) => {
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
   
const fetchPerformanceData = async (usId) => {
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
  
export {fetchMainData, fetchActivityData, fetchSessionsData, fetchPerformanceData}