// const form = document.getElementById("form");
// const startdate = document.getElementById("startdate");
// const enddate = document.getElementById("enddate");

// function getDataFromApi(event) {
//   let url = "https://fe04156e-b0a5-468a-a569-dab0a548bb56.mock.pstmn.io";

//   var settings = {
//     url: `${url}/transactions?startdate=${startdate}&enddate=${enddate}`,
//     method: "GET",
//     timeout: 0,
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   var myArray = [];
//   console.log("calling API");

//   $.ajax(settings).done(function (response) {
//     myArray = response;
//     buildTable(myArray);
//     console.log(myArray);
//   });
//   event.preventDefault();
// }

// function buildTable(data) {
//   var table = document.getElementById("myTable");

//   for (var i = 0; i < data.length; i++) {
//     var row = `<tr>
//                       <td>${data[i].date}</td>
//                       <td>${data[i].amount}</td>
//                       <td>${data[i].category}</td>
//                       <td>${data[i].description}</td>
//                       <td>${data[i].account}</td>
//                 </tr>`;
//     table.innerHTML += row;
//   }
// }

// form.addEventListener("submit", getDataFromApi);

const form = document.getElementById("form");
const startdate = document.getElementById("startdate");
const enddate = document.getElementById("enddate");
const category = document.getElementById("category");
const description = document.getElementById("description");

function buildUrl() {
  let url = `https://nus-course-backend-5i7iu7m5xa-uc.a.run.app/transaction?`;
  let isFirstParams = true;

  if (startdate.value !== "") {
    url += `startDate=${startdate.value}`;
    isFirstParams = false;
  }

  if (enddate.value !== "") {
    url += `${isFirstParams ? "" : "&"}endDate=${enddate.value}`;
    isFirstParams = false;
  }

  if (category.value !== "") {
    url += `${isFirstParams ? "" : "&"}category=${category.value}`;
    isFirstParams = false;
  }

  if (description.value !== "") {
    url += `${isFirstParams ? "" : "&"}description=${description.value}`;
  }

  return url;
}

function getDataFromApi(event) {
  var settings = {
    url: buildUrl(),
    method: "GET",
    timeout: 0,
    headers: {
      Accept: "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
  };

  var myArray = [];

  $.ajax(settings).done(function (response) {
    myArray = response;
    console.log(myArray);
    buildTable(myArray);
  });
  event.preventDefault();
}

function buildTable(data) {
  var table = document.getElementById("myTable");
  table.innerHTML = "";

  for (var i = 0; i < data.length; i++) {
    var row = `<tr>
                      <td>${data[i].Date}</td>
                      <td>${data[i].Amount}</td>
                      <td>${data[i].Category}</td>
                      <td>${data[i].Description}</td>
                      <td>${data[i].Account}</td>
                </tr>`;
    table.innerHTML += row;
  }
}

form.addEventListener("submit", getDataFromApi);
