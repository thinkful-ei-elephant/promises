const axios = require("axios");
const BASE_URL = 'http://localhost:5000/constellations';

 
const bootes = {
  name: "Bootes",
  meaning: "Herdsman",
  starsWithPlanets: 5,
  quadrant: "NQ3",
};
 
axios.get(BASE_URL).then(({data}) =>{
    console.log(data);
    return data.find(constellation => constellation.name === bootes.name);
}).then(constellationFound=>{
    if(constellationFound) return Promise.reject('This constellation exists');
    return axios.post(BASE_URL, bootes).then(({ data }) => console.log(data));
}).catch(console.log)




