/* Global Variables */
// Personal API Key for OpenWeatherMap API
const baseURL = "https://api.openweathermap.org/data/2.5/weather?"; 
const apiKey ="c7f0688b62bbfd98f4c1459951c216ac&units=imperial";
let zip = document.getElementById("zip");
let feeling = document.getElementById("feelings");
let generate = document.getElementById("generate");
let zipCode ;
let feelingValue = "";



const country = document.getElementById("country");
const date = document.getElementById("date");
const temp = document.getElementById("temp");
const content = document.getElementById("content");





// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

// Event listener to add function to existing HTML DOM element
generate.addEventListener('click',allValue);

/* Function called by event listener */
function allValue (){
    zipCode=zip.value;
    feelingValue = feeling.value;
    getApi('/wea').then(function(data){
        postData('/sendData',{zip:zipCode,feeling:feelingValue,temp:data.main.temp,country:data.sys.country})
        .then(getUiData('/getUiData'))
    })
}

/* Function to GET Web API Data*/

const getApi = async (url)=>{
    const request = await fetch(`${baseURL}zip=${zipCode}&appid=${apiKey}`)
    try{
        let data  = await request.json();
        return data
    }catch{
        console.log("error");
    }
}

/* Function to POST data */
const postData = async (url="",data={})=>{
    const response = await fetch(url,{
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),  
    })
    try{
        const newData = await response.json();

    }catch{
        console.log("post error");
    }
}


/* Function to GET Project Data */

const getUiData = async (url='')=>{
    const request = await fetch(url)
    try{
        const allData = await request.json();
        console.log(allData);
        //Updating UI Elements
        allData.forEach(ele=>{
            date.innerHTML=`The data is ${newDate} .` ;
            temp.innerHTML=`The temp is ${ele.temp} degrees .`;
            content.innerHTML=`Feeling is ${ele.feeling} .`;
            country.innerHTML=`The country is ${ele.country} .`;
        })

        return allData;
    }catch{
        console.log("UI ERROR");
    }
}


