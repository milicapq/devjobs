document
  .querySelectorAll(".filter button, .searchButton")
  .forEach((btn) => btn.addEventListener("click", funkcijaNeka));

function filterFunction(e) {
  const title = document.querySelector("#filter").value.toLowerCase();
  const locationTop = document
    .querySelector("#location-top")
    .value.toLowerCase();
  const location = document.querySelector("#location").value.toLowerCase();
  const fulltime = document.querySelector("#fulltime").checked;

  let filteredData = [...data];
  if (title) {
    filteredData = filteredData.filter(
      (a) =>
        a.position.toLowerCase().includes(title) ||
        a.company.toLowerCase().includes(title)
    );
  }

  if (location) {
    filteredData = filteredData.filter((a) =>
      a.location.toLowerCase().includes(location)
    );
  }
  if (locationTop) {
    filteredData = filteredData.filter((a) =>
      a.location.toLowerCase().includes(locationTop)
    );
  }
  if (fulltime) {
    filteredData = filteredData.filter((a) => a.contract === "Full Time");
  }
  render(filteredData);
}

document.querySelectorAll('[type="text"]').forEach((a) =>
  a.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
      filterFunction();
    }
  })
);
