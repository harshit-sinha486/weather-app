window.addEventListener("load",()=>{
    let lon;
    let lat;



    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);
    } else {
        console.log("Geolocation not available!")
    }
});


 async function getPosition(position) {
    console.log("position: ", position)
    
        let Tempvar=document.querySelector('.temperature-degree');
        let location=document.querySelector('.location');
        let desc=document.querySelector('.temperature-description');
        lon=position.coords.longitude,
        lat=position.coords.latitude,
        APPID = "646e4465936a4cd9f61332dcc51b5c3c";
    
    console.log(`lat=${lat}\nlon=${lon},\nAPPID=${APPID}`)

    let api=new URL(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${APPID}`);
   

    // fetch(api,{mode: 'cors'})
    // .then(data => {
    //     return data.json();
    // })
    // .then(data => console.log(data));


    let data = await (await fetch(api)).json()
    console.log( data);


    Tempvar.textContent= data.main.temp;
    location.textContent=data.name;
    desc.textContent=data.weather[0].main;

}