// fetching from db.json
const url = "http://localhost:3000/Cars"
fetch(url)
.then(res=> res.json())
.then(data => data.forEach(car =>renderCars(car)))
//rendering cars
    function renderCars(car){
        const cars=document.createElement("p")
        cars.className = "card1"
        cars.innerHTML=`
        
        <P><strong>${car.name}<br></strong>
        <img src=${car.image} height="200px" width="300px">
        <strong id="move">Brand:</strong>${car.brand}<br>
        <strong id="move">Price:</strong>${car.price}<br>
        <strong id="move">Condition:</strong>${car.condition}<br>
        <strong id="move">Mileage:</strong>${car.mileage}<br>
        <strong id="move">Top speed:</strong>${car.topspeed}<br>
        <strong id="move">Fuel consumption:</strong>${car.fuelconsumption}<br>
        <strong id="move">Best for:</strong>${car.comment}<br>
        <strong id="move">Review:</strong><span>${car.review}</span>
        <button>Like</button> 
        </p>
        `

        document.getElementById("card").appendChild(cars)
        addReview = () =>{
            car.review ++;
            // console.log(car.review[1])
            console.log(cars.getElementsByTagName("span"))
        }
    }
    //Renders form for hire purchase
    document.getElementById("calculator").addEventListener('click',()=>{
        const calculatorForm = document.createElement("form")
        calculatorForm.id = 'form'
        calculatorForm.innerHTML = `
        <label>Enter price of the car </label><br>
        <input type="number"><br>
        <label for="months">How many months will you use to pay</label><br>
        <input type="number"><br>
        <button>calculate</button>`

        //rendering form
        document.getElementById("calculator").appendChild(calculatorForm)
    })
    //calculate hire purchase price
    calculateAmountPaid =() =>{
        //defining co

    }

   
    
