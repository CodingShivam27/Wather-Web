

function MyCode(){
    event.preventDefault();
    let city=document.querySelector("#city").value;
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8eccc763486b9b2136439fcb4b1de7c3`;
    fetch (url).then(function(res){
        return res.json();
    }).then(function (res){
        app(res);
    })
    //console.log("me")

    
}

function app(data){
    console.log(data)

    


    var div=document.querySelector("#container");
    div.innerHTML=null;
    let cname=document.createElement("p");
    cname.setAttribute("id","cname");
    cname.innerText=`CITY : ${data.name}`;
//
    let datadiv=document.createElement("div");
    datadiv.setAttribute("id","data");
//
    let mindiv=document.createElement("div");
    mindiv.setAttribute("class","datadiv");
    
    let i1=document.createElement("i");
    i1.setAttribute("class","fa-solid fa-temperature-arrow-down min")

    let i1p=document.createElement("p");
    i1p.innerText= (Math.round((Number(data.main.temp_min)-273.15)*100.0)/100.0);

    mindiv.append(i1,i1p);
//
    let maxdiv=document.createElement("div");
    maxdiv.setAttribute("class","datadiv");
    
    let i2=document.createElement("i");
    i2.setAttribute("class","fa-solid fa-temperature-arrow-up max")

    let i2p=document.createElement("p");
    i2p.innerText= (Math.round((Number(data.main.temp_max)-273.15)*100.0)/100.0);

    maxdiv.append(i2,i2p);
//
    let nordiv=document.createElement("div");
    nordiv.setAttribute("class","datadiv");
    
    let i3=document.createElement("i");
    i3.setAttribute("class","fa-solid fa-temperature-high nor")

    let i3p=document.createElement("p");
    i3p.innerText= (Math.round((Number(data.main.temp)-273.15)*100.0)/100.0);

    nordiv.append(i3,i3p);
//
    let winddiv=document.createElement("div");
    winddiv.setAttribute("class","datadiv");
    
    let i4=document.createElement("i");
    i4.setAttribute("class","fa-solid fa-wind wind")

    let i4p=document.createElement("p");
    i4p.innerText= data.wind.speed;

    winddiv.append(i4,i4p);
//
    let clouddiv=document.createElement("div");
    clouddiv.setAttribute("class","datadiv");

    let i5=document.createElement("i");
    i5.setAttribute("class","fa-solid fa-cloud clo")

    let i5p=document.createElement("p");
    i5p.innerText= data.clouds.all;

    clouddiv.append(i5,i5p);
//
    let sundiv=document.createElement("div");
    sundiv.setAttribute("class","datadiv");

    let i6=document.createElement("i");
    i6.setAttribute("class","fa-solid fa-cloud-sun sun")

    let i6p=document.createElement("p");
    i6p.innerText= data.sys.sunrise;

    sundiv.append(i6,i6p);

    // <i class="fa-solid fa-cloud-sun"></i>
    // <i class="fa-solid fa-sunrise"></i>
    // let min=document.querySelector("#min");
    // min.innerText=;
    
    // let max=document.querySelector("#max");
    // max.innerText=(Math.round((Number(data.main.temp_max)-273.15)*100.0)/100.0);

    // let current=document.querySelector("#normal");
    // current.innerText=(Math.round((Number(data.main.temp)-273.15)*100.0)/100.0);

    // let wind=document.querySelector("#wind");
    // wind.innerText=data.wind.speed;
    // let cloud=document.querySelector("#clouds");
    // cloud.innerText=data.clouds.all;


    datadiv.append(mindiv,maxdiv,nordiv,winddiv,clouddiv,sundiv)
    div.append(cname,datadiv);
    //div.append(humidity)
    let map=document.querySelector("#gmap_canvas");

    map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
}

//navigator.geolocation.getCurrentPosition(success);

