addEventListener('DOMContentLoaded',fetchingFunction())

// fetching from db.json
function fetchingFunction(){
    let searchValue = document.getElementById("searchValue").value  
    let theLength = searchValue.length     
    const url = "https://keroka-dealers.onrender.com/Cars"
    fetch(url)
    .then(res=> res.json())
    .then(data =>{
        let  allCars = data.filter(car =>{
            let name = car.name.slice(0, theLength).toLowerCase()
            if(theLength > 1 && name === searchValue.toLowerCase()){
                return car
            }
            else{
                return data
            }
        })
        // document.querySelector(".card-container").removeChild()
        allCars.map(car=>{
            renderCars(car)
        })
    })
    }
    


//rendering cars
 function renderCars(car){
    const cars=document.createElement("p")
    cars.className = "card"
     cars.innerHTML=`
    
    <P><strong> ${car.name}<br></strong>
    <img src=${car.image} height="180px" width="280px">
    <strong id="move">Brand:</strong> ${car.brand}<br>
    <strong id="move">Price:</strong> KES${car.price}<br>
    <strong id="move">Condition:</strong> ${car.condition}<br>
    <strong id="move">Mileage:</strong> ${car.mileage}miles<br>
    <strong id="move">Top speed:</strong> ${car.topspeed}<br>
    <strong id="move">Fuel consumption:</strong> ${car.fuelconsumption}litre/km<br>
    <span>${car.comment}</><span><br>  
    
    <div class='flex-display'>
    <button id ="buy"><strong id="move">Likes: </strong>${car.review}</button><strong>
    <button onclick="handleDisplay()">Buy</button>
    </div>
    </p>    `  
    // The like event
    cars.querySelector("#buy").addEventListener('click',()=>{
            car.review ++;
            //update to server
            fetch(`https://keroka-dealers.onrender.com/Cars/${car.id}`,{
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    review : car.review
                  }),  
            }
           
            )
            .then(res =>{
                if(res.ok){
                    window.location.reload(false)
                }
            })

            // changing the current number of likes           
            // cars.querySelector('span').textContent = car.review;
            
        })
        //appending the cars 
    document.querySelector(".card-container").appendChild(cars);

    }

    //Renders form for hire purchase
document.getElementById("calculatorButton").addEventListener('click',()=>{
        const calc=document.getElementById("calc");
        calc.style.display = "block";               
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
            document.getElementById("calc").remove()
            document.getElementById("calculator").innerHTML=`
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
    const email = document.getElementById("email").value
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
            reply = "Our agents are busy currently.Please wait we will send an email soon"
            example = "You may check you junk or spam "
            let finalMessage = `
            <!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no">
  <meta name="color-scheme" content="light">
  <meta name="supported-color-schemes" content="light">
  <title></title>

  <!--[if !mso]><!-->
  <style type="text/css">
    @import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap);
  </style>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i &subset=cyrillic,latin-ext" data-name="open_sans" rel="stylesheet" type="text/css">
  <!--<![endif]-->

  <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->

  <!--[if mso]>
        <style>
            * {
                font-family: sans-serif !important;
            }
        </style>
    <![endif]-->

  <!--[if !mso]><!-->
  <!-- insert web font reference, eg: <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i &subset=cyrillic,latin-ext" rel='stylesheet' type='text/css'> -->
  <!--<![endif]-->


  <style>
    :root {
      color-scheme: light;
      supported-color-schemes: light;
    }

    html,
    body {
      margin: 0 auto !important;
      padding: 0 !important;
      height: 100% !important;
      width: 100% !important;
    }

    * {
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }

    div[style*="margin: 16px 0"] {
      margin: 0 !important;
    }

    #MessageViewBody,
    #MessageWebViewDiv {
      width: 100% !important;
    }

    table,
    td {
      mso-table-lspace: 0pt !important;
      mso-table-rspace: 0pt !important;
    }

    th {
      font-weight: normal;
    }

    table {
      border-spacing: 0 !important;
      border-collapse: collapse !important;
      table-layout: fixed !important;
      margin: 0 auto !important;
    }

    a {
      text-decoration: none;
    }

    img {
      -ms-interpolation-mode: bicubic;
    }

    a[x-apple-data-detectors],
    /* iOS */
    .unstyle-auto-detected-links a,
    .aBn {
      border-bottom: 0 !important;
      cursor: default !important;
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }

    .im {
      color: inherit !important;
    }

    .a6S {
      display: none !important;
      opacity: 0.01 !important;
    }

    img.g-img+div {
      display: none !important;
    }

    @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
      u~div .email-container {
        min-width: 320px !important;
      }
    }

    @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
      u~div .email-container {
        min-width: 375px !important;
      }
    }

    @media only screen and (min-device-width: 414px) {
      u~div .email-container {
        min-width: 414px !important;
      }
    }
  </style>

  <style>
    .button-td,
    .button-a {
      transition: all 100ms ease-in;
    }

    .button-td-primary:hover,
    .button-a-primary:hover {
      background: #5582ff !important;
      border-color: #5582ff !important;
    }

    .email-container p.column-header {
      padding-top: 30px;
    }

    @media screen and (max-width: 600px) {

      .email-container {
        width: 100% !important;
        margin: auto !important;
      }

      .stack-column,
      .stack-column-center {
        display: block !important;
        width: 100% !important;
        max-width: 100% !important;
        direction: ltr !important;
      }

      .stack-column-center {
        text-align: center !important;
      }

      .center-on-narrow {
        text-align: center !important;
        display: block !important;
        margin-left: auto !important;
        margin-right: auto !important;
        float: none !important;
      }

      table.center-on-narrow {
        display: inline-block !important;
      }

      .email-container p {
        font-size: 15px !important;
      }

      .email-container p.header-text {
        font-size: 32px !important;
      }

      .email-container p.column-header {
        font-size: 19px !important;
        padding-top: 32px;
      }

      .email-container .grid img {
        max-width: 100% !important;
      }

      .email-container .grid .mobile-gap {
        padding-bottom: 48px;
      }

      .email-container .grid .link-button {
        padding: 32px 10px 10px !important;
      }

      .email-container .logo img {
        width: 100% !important;
      }
    }
  </style>

</head>

<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #F5F6F8;">
  <center role="article" aria-roledescription="email" lang="en" style="width: 100%; background-color: #F5F6F8;">
    <!--[if mso | IE]>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F5F6F8;">
    <tr>
    <td>
    <![endif]-->
    <!-- Email Body -->
    <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="640" style="margin: auto;" class="email-container">

      <!-- Unsubscribe -->
      <tr>
        <td style="padding: 20px 32px; text-align: center">
          <p style="height: auto; margin: 15px 0; background: #F5F6F8; font-family: Open Sans; font-size: 11px; line-height: 15px; color: #555555; background-color: #F5F6F8;">
            Unable to view? Read it <a href="{view}" class="link-btn">online</a></p>
        </td>
      </tr>

      <!-- Header image -->
      <tr>
        <td>
          <img src="https://plus.unsplash.com/premium_photo-1682125845754-9a4b0d77a66a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" width="640" height="" alt="alt_text" border="0" style="width: 100%; max-width: 640px; height: auto; margin: auto; display: block;" class="g-img">
        </td>
      </tr>

      <!-- Section: email title -->
      <tr>
        <td style="padding: 48px 32px 20px; text-align: center; background-color: #ffffff;">
          <p class="header-text" style="height: auto; margin: 15px 0; background: #ffffff; font-family: Open Sans; text-align: center; font-size: 32px; line-height: 34px; color: #000000; background-color: #ffffff;">
            Thank you for contacting us
          </p>
          <p style="height: auto; margin: 28px 0 15px; background: #ffffff; text-align: center; font-family: Open Sans; font-size: 15px; line-height: 27px; color: #5F5F5F; background-color: #ffffff;">
            Your question ${question}, has been received and we will reply soon.If any other question please reply to this email 
            We hope yo have a nice day.Thank you for choosing keroka dealers.
          </p>
        </td>
      </tr>
      <td style="padding: 20px 32px 64px; text-align: center; background-color: #ffffff;">
        <!-- Button -->
        <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: auto; padding: 20px;">
          <tr>
            <td class="button-td button-td-primary" style="border-radius: 4px; background: #2e66ff;">
              <a class="button-a button-a-primary" href="#" style="background: #2e66ff; border: 1px solid #2e66ff; font-family: Open Sans; font-size: 16px; line-height: inherit; text-decoration: none; padding: 16px; color: #ffffff; display: block; border-radius: 4px;">
                Continue
              </a>
            </td>
          </tr>
        </table>
      </td>

      <!-- Section: columns -->
      <tr>
        <td style="padding: 64px 32px 0; text-align: center; background-color: #f9fafb;">
          <p class="header-text" style="height: auto; margin: 0; background: #f9fafb; font-family: Open Sans; font-size: 32px; line-height: 34px; color: #000000; background-color: #f9fafb;">
            Contact us
          </p>
        </td>
      </tr>

      <!-- Columns -->
      <tr>
        <td style="padding: 0 0 58px; background-color: #f9fafb;">
          <table role="presentation" class="grid" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
              <th valign="top" width="33.33%" class="stack-column-center mobile-gap">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
   
                  <tr>
                    <td style="font-family: Open Sans; font-size: 15px; line-height: 27px; color: #555555; padding: 0 10px 10px; text-align: center;" class="center-on-narrow">
                      <p style="margin: 0 0 32px;">Visit our offices in,
                        <br>
                        Keroka plaza, opposite General hospital
                      </p>
                    </td>
                  </tr>
                  <tr>

                  </tr>
                </table>
              </th>
              <th valign="top" width="33.33%" class="stack-column-center mobile-gap">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tr>
                    <td style="font-family: Open Sans; font-size: 15px; line-height: 27px; color: #555555; padding: 0 10px 10px; text-align: center;" class="center-on-narrow">
                      <p style="margin: 0 0 32px;">
                          morebucalvin@gmail.com 
                          <strong>Call:</strong> +254742073092
                      </p>
                    </td>
                  </tr>

                </table>
              </th>
              <th valign="top" width="33.33%" class="stack-column-center">
              </th>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Section: about the author -->
      <tr>

      </tr><tr>
        <td style="background: #ffffff; background-color: #ffffff;" bgcolor="#ffffff">
          <img src="https://api.smtprelay.co/userfile/a18de9fc-4724-42f2-b203-4992ceddc1de/footer-default.png" width="640" height="" alt="alt_text" border="0" style="width: 100%; max-width: 640px; height: auto; margin: auto; display: block;" class="g-img">
        </td>
      </tr>

      <!-- Social -->
      <tr>
        <td class="footer" align="center" valign="top" style="padding: 50px 0 28px;">
          <table border="0" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <td align="center" valign="top">
                <a href="#" target="_blank">
                  <img src="https://api.smtprelay.co/userfile/a18de9fc-4724-42f2-b203-4992ceddc1de/ro_sol_co_32_facebook2023-04-07T15_55_16.png" class="fadeimg" alt="Facebook" width="32" height="32" style="max-width: 32px;">
                </a>
              </td>
              <td align="center" valign="top" style="padding: 0 10px 0 20px;">
                <a href="#" target="_blank">
                  <img src="https://api.smtprelay.co/userfile/a18de9fc-4724-42f2-b203-4992ceddc1de/ro_sol_co_32_twitter2023-04-07T15_55_16.png" class="fadeimg" alt="Twitter" width="32" height="32" style="max-width: 32px;">
                </a>
              </td>
              <td align="center" valign="top" style="padding: 0 20px 0 10px;">
                <a href="#" target="_blank">
                  <img src="https://api.smtprelay.co/userfile/a18de9fc-4724-42f2-b203-4992ceddc1de/ro_sol_co_32_youtube2023-04-07T15_55_16.png" class="fadeimg" alt="You Tube" width="32" height="32" style="max-width: 32px;">
                </a>
              </td>
              <td align="center" valign="top">
                <a href="#" target="_blank">
                  <img src="https://api.smtprelay.co/userfile/a18de9fc-4724-42f2-b203-4992ceddc1de/ro_sol_co_32_linkedin2023-04-07T15_55_16.png" class="fadeimg" alt="Linked In" width="32" height="32" style="max-width: 32px;">
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <!-- Unsubscribe -->

    <!--[if mso | IE]>
    </td>
    </tr>
    </table>
    <![endif]-->
  </table></center>
</body>

</html>
            `
            Email.send({
                Host : "smtp.elasticemail.com",
                Username : "morebucalvin@gmail.com",
                Password : "6D0447F5E1D19EA63F338F218A17A838A3BD",
                To : email,
                From : "morebucalvin@gmail.com",
                Subject : "Response due to your question",
                Body : finalMessage
            }).then(
              message => alert(`${message} Message sent successfully receive response soon`
              
            ));
            setTimeout(()=>{window.location.reload(false)}, 8000)
            
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

function handleDisplay(){
    console.log("hello world")
    let buyForm = document.getElementById("sale")
    buyForm.style.display="block"
}
    



   
   
