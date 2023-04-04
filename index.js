// fetching from db.json
const url = "http://localhost:3000/Cars"
fetch(url)
.then(res=> res.json())
.then(data => data.forEach(car =>renderCars(car)))
//rendering cars
    function renderCars(car){
        const cars=document.createElement("span")
        cars.className = "card1"
        cars.innerHTML=`
        <img src=${car.image} height="200px">
        <P>${car.name}<br>
        Brand:${car.brand}<br>
        Price:${car.price}<br>
        Condition:${car.condition}<br>
        Mileage:${car.mileage}<br>
        Top speed:${car.topspeed}<br>
        Fuel consumption:${car.fuelconsumption}<br>
        <button>Buy</button>
        </p>

        `

        document.getElementById("card").appendChild(cars)
    }

