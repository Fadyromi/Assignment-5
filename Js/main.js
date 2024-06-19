


// const day1Element = document.getElementById('day1');
// day1Element.innerHTML = wDataShow.forcast.forcastday('0');

const searchinp = document.getElementById('searchinput');
const buttonAddon = document.getElementById('button-addon');
buttonAddon.addEventListener('click', searchinp);





try {
    (async function () {
        const wDataSrc = await fetch('http://api.weatherapi.com/v1/forecast.json?key=a51cbe82160f4e2990e124248241206&q=07112&days=3');
        const wDataShow = await wDataSrc.json();


        //=============== Forecast-day1 =============== //
        const day1Element = document.getElementById('date');
        day1Element.innerHTML = wDataShow.current.last_updated;

        const city = document.getElementById('city');
        city.innerHTML = wDataShow.location.country + ' / ' + wDataShow.location.name;

        //========== Current Temp ========== //
        const dgree = document.getElementById('dgree');
        const currentdeg = document.getElementById('currentdeg');
        const currentdeg2 = document.getElementById('currentdeg2');
        dgree.innerHTML = wDataShow.current.temp_c;
        currentdeg.innerHTML = wDataShow.current.temp_c;
        currentdeg2.innerHTML = wDataShow.current.temp_c;


        const condition = document.getElementById('condition');
        condition.innerHTML = wDataShow.current.condition.text;

        const Rain = document.getElementById('Rain');
        Rain.innerHTML = wDataShow.forecast.forecastday[0].day.daily_chance_of_rain;

        const Wind = document.getElementById('Wind');
        Wind.innerHTML = wDataShow.current.wind_kph;

        const Wdir = document.getElementById('Wdir');
        Wdir.innerHTML = wDataShow.current.wind_dir;

        //=============== Forecast-day2 =============== //


        const day2 = document.getElementById('day2');
        day2.innerHTML = wDataShow.forecast.forecastday[1].date;

        const dgree2 = document.getElementById('dgree2');
        dgree2.innerHTML = wDataShow.forecast.forecastday[1].day.maxtemp_c;

        const condition2 = document.getElementById('condition2');
        condition2.innerHTML = wDataShow.forecast.forecastday[1].day.condition.text;

        //=============== Forecast-day3 =============== //

        const day3 = document.getElementById('day3');
        day3.innerHTML = wDataShow.forecast.forecastday[2].date;

        const dgree3 = document.getElementById('dgree3');
        dgree3.innerHTML = wDataShow.forecast.forecastday[2].day.maxtemp_c;

        const condition3 = document.getElementById('condition3');
        condition3.innerHTML = wDataShow.forecast.forecastday[2].day.condition.text;

        console.log(wDataShow);

       
        
    })();
} catch (error) {
    console.log(error);
}

