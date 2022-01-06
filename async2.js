const axios = require("axios");
const BASE_URL = 'http://localhost:5000/constellations';


	
async function addConstellation(constellation) {
    let {data} = await axios.get(BASE_URL);
    let exists = data.find(constell=>constell.name===constellation.name);
    let postResp;
    if(!exists){
        postResp = await axios.post(BASE_URL, constellation);
    }
    return postResp.data;
  }
   
  const newConstellation={
      name:'Taurus',
      meaning:'Bull',
      starsWithPlanets:5,
      quadrant:'SQ5'
  }
  addConstellation(newConstellation).then(responses=>{
      console.log(responses);
  });
  