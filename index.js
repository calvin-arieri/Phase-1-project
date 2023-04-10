addEventListener('DOMContentLoaded',fetchingFunction())

// fetching from db.json
function fetchingFunction(){
const url = "https://raw.githubusercontent.com/calvin-arieri/Phase-1-project/main/db.json"
fetch(url)
.then(res=> res.json())
.then(data => data.forEach(car =>renderCars(car)))
}

//rendering cars
 function renderCars(car){
    const cars=document.createElement("p")
    cars.className = "card1"
     cars.innerHTML=`
    
    <P><strong> ${car.name}<br></strong>
    <img src=${car.image} height="200px" width="300px">
    <strong id="move">Brand:</strong> ${car.brand}<br>
    <strong id="move">Price:</strong> ${car.price} Kenyan shillings<br>
    <strong id="move">Condition:</strong> ${car.condition}<br>
    <strong id="move">Mileage:</strong> ${car.mileage}miles<br>
    <strong id="move">Top speed:</strong> ${car.topspeed}<br>
    <strong id="move">Fuel consumption:</strong> ${car.fuelconsumption}litre/km<br>
    <strong id="move">Best for:</strong> ${car.comment}<br>
    <strong id="move">Likes:</strong> <span id="rev">  ${car.review}</span><br>
    <strong id="move"><button id ="buy">Like</button><strong>
    </p>
    `  
    // The like event
    cars.querySelector("#buy").addEventListener('click',()=>{
            car.review ++;
            //changing the current number of likes           
            cars.querySelector('span').textContent = car.review;
            
        })
        //appending the cars 
    document.getElementById("card").appendChild(cars);

    }

    //Renders form for hire purchase
document.getElementById("calculatorButton").addEventListener('click',()=>{
        const calc=document.getElementById("calc");
        calc.style.display = "block";
        calc.style.backgroundColor="#0D2949";
        calc.style.color = "#A9CAEF";
        calc.style.marginLeft="35%";
        calc.style.width="25%";
        calc.style.marginBottom="2%";
               
    })

    //calculate hire purchase price
calculateAmountPaid =() =>{
    //defining constants
    const interest1 = 1.6
    const interest2 = 1.2
    const amount = document.getElementById("price").value
    const deposit = 0.1*amount
    const period = document.getElementById("period").value

    if((amount > 2000 && period > 1)){
        if(period<=24){
            // calculate hire purchase if time is less than two years
            if(amount < 4000000){
                hirePurchase = amount * interest1
                interest = "20%"
            }
            else{
                hirePurchase = amount*interest2
                interest = "10%"
            }
            let totalInstallment= hirePurchase - deposit
            let monthlyInstallment = totalInstallment/period

            let fullPayment = totalInstallment + deposit

            //rendering in html 
            document.getElementById("calculator").remove()
            document.getElementById("calculatorButton").remove()
            document.getElementById("outcome").innerHTML=`
            <p >
            <strong> Deposit to be paid:</strong> ${deposit}<br>
            <strong> Interest rate:</strong> ${interest}<br>
            <strong> Total installment:</strong> ${totalInstallment}<br>
            <strong> Monthly installments:</strong> ${monthlyInstallment}<br>
            <strong> Period:</strong> ${period}<br>
            <strong> Total amount to be paid:</strong> ${fullPayment}
            </p>
            `
        }
        else{
                window.alert("You cannot pay for more than two years")
        }
    }
    else {
        window.alert("Please input price and time")
    }
    }

giveResponse = () => {
    const name = document.getElementById("2").value
    const question = document.getElementById("1").value
    const ask = question.toLowerCase()
    //console.log(ask)
    const emptyString = ""

    if(name != emptyString && ask != emptyString){
        question1 = "which are the best cars for 7 people"
        question2 ="which is the most cheapest car i can find"

        if(ask === question1){
            reply = "Most of the SUV cars are able to carry seven peaple at a go."
            example ="eg.landcruiser, RAV 4 , Jimny"
        }
        else if(ask === question2) {
            reply = "Go for the small cars they are also good in fuel consumption"
            example = "eg. Alto, Vitz"            
        } 
        else if(ask === "hello"){
            reply = "Thank you for contacting Keroka dealers"
            example = "How may we help you today"
        }
        else {
            reply = "Our agents are busy currently"
            example = "Please wait we will send an email soon"
        }
        //console.log(reply, example)
        document.getElementById("answer").innerHTML =`
        "Hello, ${name} ${reply}.<br>${example}"
        <br>
        <em> Replied by <strong>Calvin</strong> automotive engineer</em>
        `
    }
    else{
        window.alert("Dont forget to type you name and quesiton ")
    }
    }

 buyCar = () =>{
    const name = document.getElementById("a").value
    const email = document.getElementById("b").value
    const carName = document.getElementById("d").value
    const date = document.getElementById("f").value
    const emptyString = ""

    if(name != emptyString && carName != emptyString && date != emptyString){
        //Output after buying 
        const buyingMsg = document.createElement("p")
        buyingMsg.className="confirmation"
        
        // content inside the buying msg
        buyingMsg.innerHTML=`
        Thank you, ${name} for choosing Keroka car dealers.Your request of buying  ${carName} from us has been received
        on ${date}. Expect a call from us soon in regards to the request <br>
        <img src="images/pngtree-check-mark-green-tick-png-image_4535297-removebg-preview.png" id="cofirmationImage">
        `
        //displaying the output
        document.getElementById("sale").remove()
        document.getElementById("buyForm").appendChild(buyingMsg)
    }
    else{
        window.alert("Do not leave any field empty")
    }
 }

 // displaying clients comment
document.getElementById('getc').addEventListener('submit',(e) =>{
    e.preventDefault()
    const theReply = document.getElementById('youreply').value
    const yourname = document.getElementById('yourname').value

    document.getElementById("out").innerHTML +=`
    <p class="thesay">${theReply}<br><em>${yourname}</em>, client </p>`
})


    



   
   
