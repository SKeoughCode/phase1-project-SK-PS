// Code Goes Here

const init = () => {

    const f1TeamsURL = "http://localhost:3000/f1Teams";

    fetch(f1TeamsURL)
        .then((resp) => resp.json())
        .then((f1Teams) => {

            f1Teams.forEach((team) => {
                renderDriver(team);
            })
        })
}

function renderDriver(team) {

    const constructorBar = document.querySelector('#constructor-bar');

    let constructorImage = document.createElement('img');
    constructorImage.src = team.constructorImage;
    constructorBar.appendChild(constructorImage);

    constructorImage.addEventListener('mouseover', () => {
        constructorImage.src = team.constructorCarImage;
        // console.log(team.constructor);
    })

    constructorImage.addEventListener('mouseout', () => {
        constructorImage.src = team.constructorImage;
    })

    constructorImage.addEventListener('click', () => {
        const detailedName1 = document.querySelector('#name1');
        detailedName1.textContent = team.driver1;

        const detailedImage1 = document.querySelector('#image1');
        detailedImage1.src = team["driver1-image"];

        const pointCount1 = document.querySelector('#point-count1');
        pointCount1.textContent = `${team["driver1-points"]}`;

        const detailedName2 = document.querySelector('#name2');
        detailedName2.textContent = team.driver2;

        const detailedImage2 = document.querySelector('#image2');
        detailedImage2.src = team["driver2-image"];

        const pointCount2 = document.querySelector('#point-count2');
        pointCount2.textContent = `${team["driver2-points"]}`;

    })
}


document.querySelector("#driver-form1").addEventListener('submit', (event) => {
    handleSubmit1(event);
})

document.querySelector("#driver-form2").addEventListener('submit', (event) => {
    handleSubmit2(event)
})


function handleSubmit1(event) {
    event.preventDefault()

    let temp1 = parseInt(event.target.submittedDriverPoints1.value);
    let temp2 = parseInt(document.querySelector("#point-count1").textContent);
    temp1 += temp2;

    document.querySelector("#point-count1").textContent = temp1;

    event.target.reset();

}

function handleSubmit2(event) {
    event.preventDefault();
    let temp1 = parseInt(event.target.submittedDriverPoints2.value);
    let temp2 = parseInt(document.querySelector("#point-count2").textContent);
    temp1 += temp2;

    document.querySelector("#point-count2").textContent = temp1;

    event.target.reset();

}


document.addEventListener("DOMContentLoaded", init);