
// weather

const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "f43d7134cd56a0ad648a976f294e3b56"
}

const input1 = document.querySelector('#input1');

input1.addEventListener("keypress", enter);



function enter(e) {

    if (e.keyCode===13){

        
        getInfo(input1.value);
    }

}


async function getInfo(data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    
    const result = await res.json();

    displayResult(result);
            
}


function displayResult (result) {

    let city = document.querySelector('#city');
    city.textContent = `${result.name}, ${result.sys.country}`;

    getOurDate();

    let temperature = document.querySelector('#temperature');
    temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

    let feelsLike = document.querySelector("#feelsLike");
    feelsLike.innerHTML = `Feels like ${Math.round(result.main.feels_like)}<span>°</span>`; 

    let conditions = document.querySelector('#conditions');
    conditions.textContent = `${result.weather[0].main}`;

    let variation = document.querySelector('#variation');
    variation.innerHTML = `Min: ${Math.round(result.main.temp_min)}<span>°</span> Max: ${Math.round(result.main.temp_max)}<span>°</span>`;
}

function getOurDate() {
    const myDate = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = days[myDate.getDay()];

    let date = myDate.getDate();
    
    let month = months[myDate.getMonth()];

    let year = myDate.getFullYear();

    let when = document.querySelector('#date');
    when.textContent = `${day}, ${date} ${month}, ${year}`;
}


// рецепты

const searchInput = document.querySelector('#input2');

const divs = document.querySelectorAll('.recipe');



searchInput.addEventListener('keyup', function(event) {
    
    const word = event.target.value.toLowerCase();

    console.log(word);

    divs.forEach(item => {

        item.querySelector('p').textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none")
    
    })
   

})



/*countdown*/



function christmasCountdown () {
    const christmasDate = new Date ("December 25, 2025 00:00");
    const now = new Date();
    const diff = christmasDate - now;

    const msInSecond = 1000;
    const msInMinute = 60*1000;
    const msInHour = 60*1000*60;
    const msInDay = 60*1000*60*24;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector('#days').textContent = displayDay;

    const displayHour = Math.floor(diff%msInDay/msInHour);
    document.querySelector('#hours').textContent = displayHour;

    const displayMinute = Math.floor(diff%msInHour/msInMinute);
    document.querySelector('#minutes').textContent = displayMinute;

    const displaySecond = Math.floor(diff%msInMinute/msInSecond);
    document.querySelector('#seconds').textContent = displaySecond;

    if (diff <=0) {
        document.querySelector('#days').textContent = 0;
        document.querySelector('#hours').textContent = 0;
        document.querySelector('#minutes').textContent = 0;
        document.querySelector('#seconds').textContent = 0;
        clearInterval(timerID);
        merryChristmas();
        
    }   
}


let timerID = setInterval(christmasCountdown,1000);


function merryChristmas () {
    const heading = document.querySelector('h1');
    heading.textContent = "MERRY CHRISTMAS, HO-HO-HO!!!";
    heading.classList.add("red");
}

const button = document.querySelector('#myButton');
button.addEventListener('click', ()=> {
    document.querySelector('#myAudio').play();
})

//анимация снег


particlesJS(
    "particles-js", 
    {
        "particles":
            {"number":
                {"value":1000,"density":
                    {"enable":true,"value_area":1000}
                },
                
                "color":
                    {"value":"#fff"},
                
                    "shape":
                    {"type":"circle","stroke":
                        {"width":0,"color":"#000000"},
                            "polygon":{"nb_sides":5},
                            "image":{"src":"img/github.svg","width":100,"height":10}
                    },
                
                "opacity":
                    {"value":0.5,"random":true,"anim":
                        {"enable":false,"speed":1,"opacity_min":0.1,"sync":false}
                    },
                
                    "size":
                        {"value":8.33451405615796,"random":true,"anim":
                            {"enable":false,"speed":40,"size_min":0.1,"sync":false}
                        },
                    
                    "line_linked":
                        {"enable":false,"distance":500,"color":"#ffffff","opacity":0.4,"width":2},
                    
                    "move":
                        {"enable":true,
                            "speed":2.333805622463184,
                            "direction":"bottom",
                            "random":true,
                            "straight":false,
                            "out_mode":"out",
                            "bounce":false,
                            "attract":{"enable":false,"rotateX":600,"rotateY":1200}
                        }
                    },
                    
            "interactivity":
                {"detect_on":"canvas",
                
                "events":
                    {"onhover":
                        {"enable":false,
                        "mode":"bubble"},
                        "onclick":{"enable":true,"mode":"repulse"},
                        "resize":true},
                        "modes":
                            {"grab":
                                {"distance":400,"line_linked":
                                    {"opacity":0.5}
                                },
                            "bubble":
                                {"distance":400,"size":4,"duration":0.3,"opacity":1,"speed":3},
                                "repulse":{"distance":200,"duration":0.4},
                                "push":{"particles_nb":4},
                                "remove":{"particles_nb":2}
                            }
                },
                "retina_detect":true}
            );
            var count_particles, stats, update; 
            stats = new Stats; 
            stats.setMode(0); 
            stats.domElement.style.position = 'relative'; 
            stats.domElement.style.left = '0px'; 
            stats.domElement.style.top = '0px'; 
            document.body.appendChild(stats.domElement); 
            count_particles = document.querySelector('.js-count-particles'); 
            update = function() 
                { stats.begin(); stats.end(); 
                    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) 
                        { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } 
                requestAnimationFrame(update); 
            }; 
            
            requestAnimationFrame(update);;





