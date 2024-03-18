var button = document.getElementById('readButton');

button.addEventListener('click', function(){
  var card = document.querySelector('.card');
  card.classList.toggle('active');

  if(card.classList.contains('active')) {
    return button.textContent = 'Read less';
  }

  button.textContent ='Read more'
})