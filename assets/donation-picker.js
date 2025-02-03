const pickerList = () => {
  const parentPicker = document.querySelectorAll('[data-donation-picker]');

  parentPicker.forEach((picker) => {
    const options = picker.querySelectorAll('[data-donation-list] [data-donation-list-option]');
    const input = picker.querySelector('[data-donation-input]');
    let selectedOption = null;

    if(options.length > 0) {
      input.value = options[0].value;
      input.placeholder = options[0].value;
      options[0].classList.add('sc-selected');
      selectedOption = options[0];
    }

    options.forEach((option, index) => {
      let value = option.value;

      option.addEventListener('click', (event) => {
        if (selectedOption) {
          selectedOption.classList.remove('sc-selected');
        }
        option.classList.add('sc-selected');
        selectedOption = option;

        if (value == "") {
          input.focus();
          input.value = "";
          input.placeholder = "";
        } else {
          input.value = value;
          input.placeholder = value;
        }
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', pickerList);