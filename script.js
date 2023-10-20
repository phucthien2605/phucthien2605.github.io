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
