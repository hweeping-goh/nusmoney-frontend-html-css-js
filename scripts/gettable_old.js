const form = document.getElementById("form");

function getDataFromApi() {
  let server = "http://localhost:3000";

  var settings = {
    url: `${server}/users/all`,
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };

  $.ajax(settings).done((response) => {
    var table = document.getElementById("myTable");
    response.forEach((record) => {
      var row = `<tr>
                    <td>${record.id}</td>
                    <td>${record.name}</td>
                    <td>${record.email}</td>
                    <td>${record.mobile}</td>
                    <td>${record.wallet}</td>
                </tr>`;
      table.innerHTML += row;
    });
  });
  event.preventDefault();
}

form.addEventListener("submit", getDataFromApi);
