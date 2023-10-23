let card_container_width = $('#pack_cont').width();
let total_cards = $('.card').length; //any number of cards will work
let card_spacing = 10;

function toggleContent() {
  let stack = document.getElementById('stack');
  let spread = document.getElementById('spread');

  if (stack.classList.contains('display-none')) {
    stack.classList.remove('display-none');
    spread.classList.add('display-none');
  } else {
    stack.classList.add('display-none');
    spread.classList.remove('display-none');
  }
}

function reset_cards() {
  let stack = document.getElementById('stack');
  let spread = document.getElementById('spread');

  stack.classList.add('display-none');
  spread.classList.remove('display-none');
  
  //stack all cards
  stack_cards(0.2);
}

function stack_cards(margin){
	let left = 0;
	let step = margin;
	let i = 0;
	$('.card').each(function(){
		$(this).css({'z-index' : i});					
		$(this).css({'margin-left':left+'px'});
		$(this).css({'margin-top':0+'px'});
		left = left + step;
		i++;
	});
}

function separate_one_by_one() {
  let stack = document.getElementById('stack');
  let spread = document.getElementById('spread');
  stack.classList.remove('display-none');
  spread.classList.add('display-none');

  let left = 0;
  let card_width = $('.card').width();
  let card_height = $('.card').height();
  //initial top margin for card placement
  let top = 0;
  //initial left margin for card placement
  let left_step = card_width + card_spacing;

  //time lag between each card placement
  let sec_step = 100;
  let time = 0;

  //loop through all cards
  $('.card').each(function () {
    let card = $(this);
    setTimeout(function () {
      card.css({
        'margin-top': top + 'px',
        'margin-left': left + 'px',
      });

      left = left + left_step;
      //if card cannot fit in current row then place it card in next row
      if (left + card_width + card_spacing > card_container_width) {
        left = 0;
        top += card_height + card_spacing;
      }
    }, time);
    //add time lag for next card placement
    time += sec_step;
  });
}
