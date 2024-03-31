let display = document.getElementById(`display`);
let firstNumber = document.getElementById(`firstNumber`);
console.log(firstNumber.value);
let secondNumber = document.getElementById(`secondNumber`);
console.log(secondNumber.value);
let calculate_option = document.getElementById(`calculate_option`);
console.log(typeof(calculate_option.value));

let calculate = document.getElementById(`calculate_btn`)
    .addEventListener(`click`, function() {

        // console.log(firstNumber.value == "");
        checkValidation(firstNumber, secondNumber, calculate_option);

        if (firstNumber.value != null && secondNumber.value != null && calculate_option.value != `default`) {
            switch (calculate_option.value) {
                case `plus`:
                    display.innerHTML = parseFloat(firstNumber.value) + parseFloat(secondNumber.value);
                    break;

                case `minus`:
                    display.innerHTML = parseFloat(firstNumber.value) - parseFloat(secondNumber.value);
                    break;

                case `multiply`:
                    display.innerHTML = parseFloat(firstNumber.value) * parseFloat(secondNumber.value);
                    break;

                case `division`:
                    display.innerHTML = parseFloat(firstNumber.value) / parseFloat(secondNumber.value);
                    break;

                default:
                    break;
            }
        }
    });

function checkValidation(firstNumber, secondNumber, calculate_option) {
    if (firstNumber.value == "") {
        document.getElementById(`fill_first_num`).style.display = "block";
    } else {
        document.getElementById(`fill_first_num`).style.display = "none";
    }

    if (secondNumber.value == "") {
        document.getElementById(`fill_second_num`).style.display = "block";
    } else {
        document.getElementById(`fill_second_num`).style.display = "none";
    }

    if (calculate_option.value == `default`) {
        document.getElementById(`option_warning`).style.display = "block";
    } else {
        document.getElementById(`option_warning`).style.display = "none";
    }
}

let clear = document.getElementById(`clear_btn`)
    .addEventListener(`click`, function() {
        display.innerHTML = 0;
    })