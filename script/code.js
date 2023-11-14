let btnSubmit = document.querySelector('[data-submit]')
// Create a function
function displayMarks() {
    let marks = +document.querySelector('[data-marks]').value
    // Label's reference
    let output = document.querySelector('[data-output]')
    // switch
    switch (true) {
        case marks < 50:
            output.textContent =  `Sorry, but you failed. Try again next time`;
        break;
        case marks <= 59:
            output.textContent =  `You passed`;
        break;
        case marks <= 69:
            output.textContent =  `C+`;
        break;
        case marks <= 79:
            output.textContent =  `Distinction`;
        break;
        case marks <= 89:
            output.textContent =  `B+`;
        break;
        case marks <= 99:
            output.textContent =  `A`;
        break;
        case marks == 100:
            output.textContent =  `A+`;
        break;
        default:
            output.textContent =  `You are a ghost`;
        break;
    }
}
btnSubmit.addEventListener('click', displayMarks)