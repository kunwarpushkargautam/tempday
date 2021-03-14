const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name= document.getElementById("city_name");
const temp_real = document.getElementById("temp-real-val");
const temp_status = document.getElementById("temp-status");


const datahide = document.querySelector('.middle-layer');


const getInfo = async(event) => {
    event.preventDefault();
    let cityVal=cityName.value;
    

    if(cityVal === ""){
        city_name.innerText =`Plz write city name`;
        datahide.classList.add('data-hide');
    }else{
        try{
        let url =`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=fb44f719f09283b775f44f8cfa8f9daf`
        const response = await fetch(url);
        const data = await  response.json();
        const arrData =[data];
        city_name.innerText=`${arrData[0].name} , ${arrData[0].sys.country} `;
        temp_real.innerText=arrData[0].main.temp;
        
        const tempmood = arrData[0].weather[0].main;
            if(tempmood == "Clear"){
                temp_status.innerHTML= "<i class='fas fa-sun' aria-hidden='true' style='color:#eccc68'></i>";
            }
            else if(tempmood == "Clouds"){
                temp_status.innerHTML= "<i class='fas fa-cloud' aria-hidden='true' style='color:f1f2f6'></i>";
            }
            else if(tempmood == "Rain"){
                temp_status.innerHTML= "<i class='fas fa-cloud-rain' aria-hidden='true' style='color:#a4b0be'></i>";
            }
            else if(tempmood == "Haze"){
                temp_status.innerHTML= "<i class='fas fa-smog'></i>";
            }
            else {
                temp_status.innerHTML= "<i class='fas fa-cloud' aria-hidden='true' style='color:#f1f2f6'></i>";
            }

            
            

            datahide.classList.remove('data-hide');
        
        }catch{
            city_name.innerText =`Plz write valid city name`;
            datahide.classList.add('data-hide');
        }
        
    }

}



submitBtn.addEventListener("click",getInfo);