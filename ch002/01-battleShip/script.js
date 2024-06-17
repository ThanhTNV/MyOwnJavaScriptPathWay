const width = 7;
let pos = [];
let shipSize = 3;
for (let i = 0; i < width; i++) {
  pos[i] = false;
}

let shipPos = getRandomNumber(0, width - shipSize);
(function generateShip() {
  for (let i = shipPos; i < shipPos + shipSize; i++) {
    pos[i] = true;
  }
})();

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// document.getElementById('c0').addEventListener('click', ()=>{
//     const cell0 = document.getElementById('c0');
//     if(pos[value] == true){
//         score++;
//         pos[value] = false;
//         cell0.setAttribute('class', 'spotted-cell cell');
//     }
// });
// let cell1 = document.getElementById('c1');
// let cell2 = document.getElementById('c2');
// let cell3 = document.getElementById('c3');
// let cell4 = document.getElementById('c4');
// let cell5 = document.getElementById('c5');
// let cell6 = document.getElementById('c6');
