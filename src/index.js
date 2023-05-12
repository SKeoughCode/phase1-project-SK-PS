// Code Goes Here

const init = () => {

    const driversURL = "http://localhost:3000/drivers";

    fetch(driversURL)
        .then((resp) => resp.json())
        .then((drivers) => console.log(drivers))
}


document.addEventListener("DOMContentLoaded", init);