const form= document.getElementById("booking-form");

const nameElement = form.elements["fullname"];
const emailElement = form.elements["email"];
const doctorElement = form.elements["doctor"];
const locationElement = form.elements["location"];
const dateElement = form.elements["date"];

const nameInfoElement= document.getElementById("name-info");
const emailInfoElement= document.getElementById("email-info");


// Validating fullname feild
nameElement.addEventListener("focus", ()=>{
    nameInfoElement.innerHTML="";
});

nameElement.addEventListener("blur", (event)=>{
    const name= event.target.value.trim();
    console.log(event.target);

    const nameRegex= /^[a-zA-Z]+$/;

    if(!name){
        nameInfoElement.innerHTML= "Name is required";
    }
    else if(name.length < 4){
        nameInfoElement.innerHTML= "Name is too short";
    }
    else if(!name.match(nameRegex)){
        nameInfoElement.innerHTML= "Enter valid name";
    }
    console.log(name);
});


// Validating email name
emailElement.addEventListener("focus", (event)=>
{
    emailInfoElement.innerHTML= "";    
});

emailElement.addEventListener("blur", (event)=>
{
    const email= event.target.value.trim();
    console.log(email);

    const nameRegex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;   

    if(!email.match(nameRegex))
    {
        emailInfoElement.innerHTML= "Enter a valid Email";
    }
});

function validation(payload)
{
    let {name, email, location, doctor, slotChoosen}= payload;
    return Boolean(name && email && location && doctor && slotChoosen);
}


form.addEventListener("submit", (event)=>
{
    console.log(event.target);

    const name= form.elements["fullname"].value;
    const email= form.elements["email"].value;
    const doctor= form.elements["doctor"].value;
    const location= form.elements["location"].value;
    const date= form.elements["date"].value;

    const payload= {
        name: name,
        email: email,
        doctor: doctor,
        location: location,
        slotChoosen: date,
    };
    console.log(payload);

    let validationRes= validation(payload);

    if(validationRes)
    {
        fetch("https://gmail.com", { method: "POST", body: JSON.stringify(payload)});
    }
    else
    {
        alert("Fill all feilds");
    }

    console.log(payload);
});


// store form to local storage before page reload
window.addEventListener("beforeunload", (event)=>{
    let payload= {
        name: nameElement.value,
        email: emailElement.value,
        doctor: doctorElement.value,
        location: locationElement.value,
        setDate:dateElement.value,
    };

    localStorage.setItem("FormData", JSON.stringify(payload));
});

// retreve data from local storage to DOM when DOM loads
document.addEventListener("DOMContentLoaded",()=>{
    const data= JSON.parse(localStorage.getItem("FormData"));
    let {name, email, doctor, location, setDate}= data;
    console.log(name, email, doctor, location, setDate);

    nameElement.value= name;
    emailElement.value= email;
    doctorElement.value= doctor;
    locationElement.value= location;
    dateElement.value= setDate;
});