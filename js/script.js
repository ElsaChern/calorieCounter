const calorieCounter = function () {
  let form = document.querySelector('form')
  let resetButton = document.querySelector('.form__reset-button')
  let submitButton = document.querySelector('.form__submit-button')
  let resultTable = document.querySelector('.counter__result--hidden ')
  let caloriesNorm = document.querySelector('.counter__result--hidden ')
  let caloriesMin = document.querySelector('.counter__result--hidden ')
  let caloriesMax = document.querySelector('.counter__result--hidden ')



  const defaultParametersValue = "";
  const defaultGender = "male";
  const defaultActivity = "min";

  form.onchange = function () {
    enableClearButton();
  }

  const enableClearButton = function () {
    let ageValue = form.querySelector('#age').value
    let heightValue = form.querySelector('#height').value
    let weightValue = form.querySelector('#weight').value
    if (ageValue !== defaultParametersValue || heightValue !== defaultParametersValue || weightValue !== defaultParametersValue) {
      resetButton.removeAttribute('disabled')
    } if (ageValue !== defaultParametersValue && heightValue !== defaultParametersValue && weightValue !== defaultParametersValue) {
      submitButton.removeAttribute('disabled')
    }
  }

  const resultCount = function() {

    
  }


  submitButton.onclick = function() {
    event.preventDefault();
    resultCount()
    resultTable.classList.remove('counter__result--hidden')
  }


  // resetButton.onclick = function () {
  //   resetButton.classList.add('form__reset-button:disabled')
  // }

  const genderRadio = document.getElementsByName('gender')
  for (let i = 0; i < genderRadio.length; i++) {
    genderRadio[i].onchange = function () {
      let genderChoice = genderRadio[i].value;
    }    
  }


  const activityradio = document.getElementsByName('activity')
  for (let i = 0; i < activityradio.length; i++) {
    activityradio[i].onchange = function () {
      let activityChoice = activityradio[i].value;
    }
  }
  



}

calorieCounter()
