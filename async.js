const axios = require("axios");
const BASE_URL = 'http://localhost:5000/constellations';


	
async function getConstellations(id1, id2) {
    const constell1Url = `${BASE_URL}/${id1}`;
    const constell2Url = `${BASE_URL}/${id2}`;

    let constell1 = await axios.get(constell1Url);
    let constell2 = await axios.get(constell2Url);
    console.log(constell1.data, constell2.data);
    return [constell1.data, constell2.data]
  }
   
  const ids = ["KGQIwSq", "32TN5F8"];
  getConstellations("KGQIwSq", "32TN5F8").then(responses=>{
      console.log(responses);
  });
  