const url= "https://run.mocky.io/v3/511fa794-6bfb-4c9f-9adb-9e18d62d7003";

async function getApiData()
{
    try{
        let data= await fetch(url);
        data= await data.json();
        return data;
    }
    catch(error)
    {
        console.log("Error fetching data: ", error);
    }
}

let apiData= await getApiData();

function getTableRow(title, acceptance, difficulty)
{
    let rowElement= document.createElement("tr");

    let col1= document.createElement("td");
    col1.innerText= title;

    let col2= document.createElement("td");
    col2.innerText= acceptance;

    let col3= document.createElement("td");
    col3.innerText= difficulty;

    rowElement.appendChild(col1);
    rowElement.appendChild(col2);
    rowElement.appendChild(col3);

    return rowElement;
}

function populateTable(apiData)
{
    let tBodyElement= document.getElementById("table-body");

    apiData.forEach( question =>{
        let {title, acRate, difficulty}= question;
        acRate= acRate.toFixed(2);
        let tRowElement= getTableRow(title, acRate, difficulty);
        tBodyElement.appendChild(tRowElement);
    })
}

let requiredQuestionList= apiData.problemsetQuestionList.questions;

function sortQuestionsByAcceptanceRate()
{
    let sortedArray= requiredQuestionList.sort((q1, q2) => q2.acRate-q1.acRate);
    return sortedArray;
}

populateTable(requiredQuestionList);

let acceptanceHeaderElement= document.querySelector("#questions-table > thead > tr > th:nth-child(2)");

acceptanceHeaderElement.addEventListener('click', function() {

    let sortedArray = sortQuestionsByAcceptanceRate(requiredQuestionList);

    let tBodyElement= document.getElementById("table-body");
    tBodyElement.innerText= "";
    populateTable(sortedArray);

});