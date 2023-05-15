// Code Goes Here

const init = () => {

    const driversURL = "http://localhost:3000/drivers";

    fetch(driversURL)
        .then((resp) => resp.json())
        .then((drivers) => {

                drivers.forEach((driver) => {
                renderDriver(driver);
            })
        })
 }

function renderDriver(driver) {

    const driverBar = document.querySelector('#driver-bar');

    let newDriverImage = document.createElement('img');
    newDriverImage.src = driver.image;

    driverBar.appendChild(newDriverImage);
    newDriverImage.addEventListener('click', () => {
        const detailedName = document.querySelector('#name');
        detailedName.textContent = driver.name;

        const detailedImage = document.querySelector('#image');
        detailedImage.src = driver.image;

        const pointCount = document.querySelector('#point-count');
        pointCount.textContent = `${driver.points}`;


    })


//             drivers.forEach(driver => renderDrivers(driver))
        })

}


document.addEventListener("DOMContentLoaded", init);


//Add the Driver Images to the character-bar

// function renderDrivers(driver) {
//     const driverImg = document.createElement('img')
//     driverImg.src = driver.image

//     document.querySelector('#character-bar').appendChild(driverImg)
// }