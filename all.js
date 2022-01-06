const axios = require("axios");
const BASE_URL = 'http://localhost:5000/constellations';


	
function getConstellations(ids) {
    const promises = ids.map((id) => {
      const url = `${BASE_URL}/${id}`;
      console.log('url',url);
      return axios.get(url).then(({data})=>{
          return data.name;
      });
    });
    console.log('array of pending promises', promises);
   
    return Promise.all(promises);
  }
   
  const ids = ["KGQIwSq", "32TN5F8"];
  getConstellations(ids).then(responses=>{
      console.log(responses);
  });
  