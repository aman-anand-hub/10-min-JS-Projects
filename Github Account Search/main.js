const profId= document.getElementById("search");
const cont= document.getElementById("profile");
const api= "https://api.github.com/users/";

cont.style.display= "none";

async function getData(username)
{
    try{
        let rawData= await fetch(api+username);
        let data= await rawData.json();
        console.log(data);
        return data;
    }
    catch(error)
    {
        console.log("error fetcing: ", error);
    }
}

// getData("aman-anand-hub");

async function updateProfile(username) {
    try {
        let data = await getData(username);
        
        cont.innerHTML =
            `<div id="prof-img">
                <img src="${data.avatar_url}" alt="avatar">
            </div>
            <div id="prof-det">
                <h4>${data.name}</h4>
                <p>${data.bio}</p>
                <div id="in-con-con">
                    <p>Following: ${data.following}</p>
                    <p>Followers: ${data.followers}</p>
                    <p>Repos: ${data.public_repos}</p>
                </div>
                <div id="in-con-con">
                    <p>Twitter: ${data.twitter_username}</p>
                    <p>Location: ${data.location}</p>
                </div>
            </div>`;

            cont.style.display= "";
    } catch (error) {
        console.log("Error updating profile: ", error);
    }
}

profId.addEventListener("keydown", function(event){
    if(event.key === "Enter")
    {
        let username = profId.value;
        console.log(username, typeof username);
        updateProfile(username);
    }
});