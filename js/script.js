const calorieCounter = function () {
  let form = document.querySelector('form');
  let resetButton = document.querySelector('.form__reset-button');
  let submitButton = document.querySelector('.form__submit-button');
  let resultTable = document.querySelector('.counter__result--hidden');
  let inputParameters = document.querySelectorAll('input[type="text"]');

  let ageValue;
  let heightValue;
  let weightValue;
  let genderCoefficient;

  const defaultParametersValue = "";
  let genderChoice;
  let activityChoice;

  let caloriesNorm = document.querySelector('#calories-norm');
  let caloriesMin = document.querySelector('#calories-minimal');
  let caloriesMax = document.querySelector('#calories-maximal');


  let activityCoefficients = {
    "min": 1.2,
    "low": 1.375,
    "medium": 1.55,
    "high": 1.725,
    "max": 1.9
  }

  let regex = /[^\d]/g; // регулярка только цифры
  for (let inputParameter of inputParameters) {
    console.log(inputParameter.value)
    inputParameter.oninput = function () {
      inputParameter.value = inputParameter.value.replace(regex, '');
    }
  }

  form.onchange = function () {
    ageValue = form.querySelector('#age').value
    heightValue = form.querySelector('#height').value
    weightValue = form.querySelector('#weight').value
    activityChoice = activityCoefficients[form.activity.value]
    genderChoice = form.gender.value
    handleResetButton();
    handleSubmitButton();
  }

  const handleResetButton = function () {
    if (ageValue !== defaultParametersValue || heightValue !== defaultParametersValue || weightValue !== defaultParametersValue) {
      resetButton.removeAttribute('disabled')
    } else {
      resetButton.setAttribute('disabled', '')
    }
  }
  const handleSubmitButton = function () {
    if (ageValue !== defaultParametersValue && heightValue !== defaultParametersValue && weightValue !== defaultParametersValue) {
      submitButton.removeAttribute('disabled')
    } else {
      submitButton.setAttribute('disabled', '')
    }
  }

  const resultCount = function () {
    let normResult;
    let minResult;
    let maxResult;

    if (genderChoice = "male") {
      genderCoefficient = 5
    } else {
      genderCoefficient = -161
    }
    normResult = Math.round(((10 * weightValue) + (6.25 * heightValue) - (5 * ageValue) + genderCoefficient) * activityChoice);
    caloriesNorm.textContent = formatResult(normResult);
    minResult = Math.round(normResult * 0.85)
    caloriesMin.textContent = formatResult(minResult);
    maxResult = Math.round(normResult * 1.15)
    caloriesMax.textContent = formatResult(maxResult);
  }

  submitButton.onclick = function (event) {
    event.preventDefault();
    resultCount()
    resultTable.classList.remove('counter__result--hidden')
  }

  resetButton.onclick = function () {
    resultTable.classList.add('counter__result--hidden')
    submitButton.setAttribute('disabled', '')
    resetButton.setAttribute('disabled', '')
    form.reset();
  }

  const formatResult = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1 `);
  };
}

calorieCounter()
