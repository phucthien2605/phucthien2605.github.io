document.getElementsByClassName('.stack').addEventListener('click', function() {
  var cards = document.querySelectorAll('.card');
  cards.forEach(function(card, index) {
    setTimeout(function() {
      card.className = 'card';
    }, index * 150);
  });
});

document.getElementsByClassName('.spread').addEventListener('click', function() {
  var cards = document.querySelectorAll('.card');
  cards.forEach(function(card, index) {
    setTimeout(function() {
      card.className = 'card ani' + index;
    }, index * 150);
  });
});
