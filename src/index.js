// Code Goes Here

const init = () => {

    const driversURL = "http://localhost:3000/drivers";

    fetch(driversURL)
        .then((resp) => resp.json())
        .then((drivers) => {
            drivers.forEach(driver => renderDrivers(driver))
        })
}


document.addEventListener("DOMContentLoaded", init);


//Add the Driver Images to the character-bar

function renderDrivers(driver) {
    const driverImg = document.createElement('img')
    driverImg.src = driver.image

    document.querySelector('#character-bar').appendChild(driverImg)
}