document.addEventListener('DOMContentLoaded', function () {
    const addOptionBtn = document.getElementById('addOptionBtn');
    const removeOptionBtn = document.getElementById('removeOptionBtn');
    const optionsContainer = document.getElementById('options');

    addOptionBtn.addEventListener('click', function () {
      const newOption = document.createElement('div');
      newOption.classList.add('option');
      newOption.innerHTML = '<input type="text" name="option[]" required>';
      optionsContainer.appendChild(newOption);
    });

    removeOptionBtn.addEventListener('click', function () {
      const options = document.querySelectorAll('.option');
      if (options.length > 1) {
        options[options.length - 1].remove();
      }
    });
  });