var weightInput = document.getElementById('weightinput')
var heightInput = document.getElementById('heightinput')


function clacBmi() {
    if (validation(weightInput) && validation(heightInput)) {
        var user = {
            weight: weightInput.value,
            height: heightInput.value,
        }
        var bmi = user.weight / (user.height * user.height);
        document.getElementById("bmi").innerHTML = bmi;
        var bmiCategory = document.getElementById('test')
        if (bmi < 18) {
            bmiCategory.innerHTML = 'Underweight'
        }
        else if (bmi < 24.9) {
            bmiCategory.innerHTML = 'NormalWeight'
        }
        else if (bmi < 29.9) {
            bmiCategory.innerHTML = 'Overweight'
        }
        else if (bmi < 35.9) {
            bmiCategory.innerHTML = 'obesity moderate'
        }
        else if (bmi < 39.9) {
            bmiCategory.innerHTML = 'obesity severe'
        }
        else {
            bmiCategory.innerHTML = 'obesity very severe'
        }

        clearInputs()
    }
}

function clearInputs() {
    weightInput.value = null;
    heightInput.value = null;
    weightInput.classList.remove('is-valid');
    heightInput.classList.remove('is-valid');

}

function validation(element) {
    var text = element.value;
    var regex = {
        weightinput: /^[1-9]\d*(\.\d+)?$/,
        heightinput: /^[1-9]\d*(\.\d+)?$/,
    }
    if (regex[element.id].test(text)) {
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
        return true;
    }
    else {
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
        return false;
    }
}