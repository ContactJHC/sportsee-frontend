let mock = process.env.REACT_APP_DEVELOPMENT

// export default async function fetchData(userId) {
//     try {
//         const response = await fetch(`http://localhost:3000/user/${userId}`)
//         let userData  = await response.json()
//         return userData            
//     }
//     catch(err) {
//         console.log(err)        
//     }
// }
   
export const fetchMainDatas = async (userId) => {
    if (mock) {
      try {
        const userMainDatas = await fetch(`data/data.json`)
          .then((res) => res.json())
          .then((data) => data.USER_MAIN_DATA)
        return userMainDatas.filter((el) => el.id + '' === userId)[0]
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


   

    