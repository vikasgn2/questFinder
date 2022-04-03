//Accessing the root div
const app = document.getElementById("root");

//Creating a new div element with it's class set to container
const container = document.createElement("div");
container.setAttribute("class", "container");

//Adding the container into the root div as its child
app.appendChild(container);

//url of the API
var apiUrl = "http://www.boredapi.com/api/activity/";

//fetch fucntion
fetch(apiUrl)
  // response of the fetch API
  .then(function (response) {
    return response.json();
  })
  //All the data returned for the API call
  .then(function (data) {
    generatedata(data);
  })
  //Error handling
  .catch(function (err) {
    console.log("error: " + err);
  });

//Adding all elements to HTML Document
function generatedata(data) {
  for (var i in data) {
    var h1 = document.createElement("h1");
    var p = document.createElement("p");
    var a = document.createElement("a");

    //Convert first letter to uppercase
    h1.innerHTML = i[0].toUpperCase() + i.substring(1);
    p.innerHTML = data[i];

    if (i == "link") {
      //Check if link isn't returned by the api
      if (data["link"] != "") {
        a.innerHTML = "More Info";
        a.href = data["link"];
        container.appendChild(h1);
        container.appendChild(a);
      }
    } else {
      if (i != "key") {
        //Skip displaying key value on HTML doc
        container.appendChild(h1);
        container.appendChild(p);
      }
    }
  }
}
