document.querySelector('form').addEventListener('submit', (event) => {
  
  event.preventDefault();
  const inputs = event.currentTarget.querySelectorAll('input')
  let result = 0

  inputs.forEach((input) => {
    if (input.checked) result += parseInt(input.dataset.points)
  });

  resultDiv = document.getElementById('result');
  resultDiv.classList.remove('ninja')
  resultDiv.innerText = `CONGRATS! You have ${result} points`
})