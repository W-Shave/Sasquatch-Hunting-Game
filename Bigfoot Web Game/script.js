function loadBigfoot() {
  document.getElementById('bigfoot').src = "bigfoot.png";
}

function foundBigfoot() {
  alert('Woohoo! You found Bigfoot!');
  let picture = document.getElementById('bigfoot');
  let x = Math.random() * 100;
  let y = Math.random() * 100;
  picture.style.top = x + 'vh';
  picture.style.left = y + 'vw';
}