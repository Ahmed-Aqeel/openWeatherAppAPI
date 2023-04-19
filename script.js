const API_key='f463bc1877560ad9dcf2530a9bb40561'

var cityData=[]
var counter=0;
let searchInput=document.getElementById('search')
async function getWeatherData(city){

  const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`)
  let het =await res.json();
  // console.log(het)
  let temp=document.getElementById('temp').innerHTML= Math.floor(het.main.temp)+'°C'
  // clouds=document.getElementById('clouds').innerHTML=het.weather[0].main
  let humid=document.getElementById('humidity').innerHTML=het.main.humidity+'%'
  let winds=document.getElementById('windspeed').innerHTML=Math.floor(het.wind.speed)+'Km/h'
  let cityName=document.getElementById('city').innerHTML=het.name;
  
  cityData.push({'temp': temp, 'humid':humid,'winds':winds,'cityName':cityName})
  // console.log(cityData)
  
  counter+=1
  // console.log('counter:'+ counter)
  localStorage.setItem('data',JSON.stringify(cityData))
  
  
 
}
let d=0
let srch_Btn=document.getElementById('search_btn')
srch_Btn.addEventListener('click',()=>{
  if(counter<1 ){
    getWeatherData(searchInput.value)
    
  }
  else{
    let old_data=JSON.parse(localStorage.getItem('data'))
    
  
    for(i in old_data){
      if(searchInput.value ===old_data[i].cityName ){
        d+=1
        document.getElementById('temp').innerHTML= old_data[i].temp
        document.getElementById('humidity').innerHTML=old_data[i].humid
        document.getElementById('windspeed').innerHTML=old_data[i].winds
        document.getElementById('city').innerHTML=old_data[i].cityName

        // console.log(d)
        // console.log(old_data)
      }
    
    }
    // console.log(d)
    if(d<1){
      getWeatherData(searchInput.value)
    }
    d=0
  }
  
  
}
  )


