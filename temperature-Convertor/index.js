
const celsiusEl =  document.getElementById("celsius");
const fahrennheitEl = document.getElementById("fahrenheit");
const kelvinEl =  document.getElementById("kelvin");



function computeTemp(){
   const currrentValue = +event.target.value

   switch(event.target.name){
    case "celsius":
        kelvinEl.value =  (currrentValue + 273.32).toFixed(2);
        fahrennheitEl.value = (currrentValue * 1.8 + 32).toFixed(2);
        break;
     case "fahrenheit":
        celsiusEl.value = ((currrentValue - 32)/1.8).toFixed(2); 
        kelvinEl.value = ((currrentValue - 32)/1.8 + 273.32).toFixed(2);
        break;
        case "kelvin":
            celsiusEl.value = (currrentValue - 273.32).toFixed(2);
            fahrennheitEl.value = ((currrentValue - 273.32) * 1.8 + 32).toFixed(2);
            break;
            default:
             break;   
   }
}