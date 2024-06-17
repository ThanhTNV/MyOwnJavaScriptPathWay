const score = [0, 1, 2, 3];
let scorePos = 0;

function changeScore(){
  const myScore = document.getElementById("myScore");
  myScore.setAttribute("value", score);
  myScore.innerHTML = score[scorePos];
}

function replay() {
  window.location.reload(true);
}
function isWin() {
  for (let i = 0; i < width; i++) {
    if (pos[i] == true) {
      return false;
    }
  }
  return true;
}

const cell0 = document.getElementById("c0");
const cell1 = document.getElementById("c1");
const cell2 = document.getElementById("c2");
const cell3 = document.getElementById("c3");
const cell4 = document.getElementById("c4");
const cell5 = document.getElementById("c5");
const cell6 = document.getElementById("c6");
cell0.addEventListener("click", () => {
  let cell = cell0;
  const value = cell.value;
  if (pos[value] == true) {
    scorePos++;
    changeScore();
    pos[value] = false;
    cell.setAttribute("class", "spotted-cell cell");
    cell.setAttribute("disabled", "true");
    if (isWin() == true) {
      setTimeout(() => {
        if (confirm("YOU WIN!\nWANT TO PLAY AGAIN?")) {
          replay();
        }
      }, 100);
    } else {
      setTimeout(() => {
        alert("Hit");
      }, 100);
    }
  } else {
    cell.setAttribute("class", "missed-cell cell");
    cell.setAttribute("disabled", "true");
    setTimeout(() => {
      alert("Miss");
    }, 100);
  }
});

cell1.addEventListener("click", () => {
  let cell = cell1;
  const value = cell.value;
  if (pos[value] == true) {
    scorePos++;
    changeScore();
    pos[value] = false;
    cell.setAttribute("class", "spotted-cell cell");
    cell.setAttribute("disabled", "true");
    if (isWin() == true) {
      setTimeout(() => {
        if (confirm("YOU WIN!\nWANT TO PLAY AGAIN?")) {
          replay();
        }
      }, 100);
    } else {
      setTimeout(() => {
        alert("Hit");
      }, 100);
    }
  } else {
    cell.setAttribute("class", "missed-cell cell");
    cell.setAttribute("disabled", "true");
    setTimeout(() => {
      alert("Miss");
    }, 100);
  }
});

cell2.addEventListener("click", () => {
  let cell = cell2;
  const value = cell.value;
  if (pos[value] == true) {
    scorePos++;
    changeScore();
    pos[value] = false;
    cell.setAttribute("class", "spotted-cell cell");
    cell.setAttribute("disabled", "true");
    if (isWin() == true) {
      setTimeout(() => {
        if (confirm("YOU WIN!\nWANT TO PLAY AGAIN?")) {
          replay();
        }
      }, 100);
    } else {
      setTimeout(() => {
        alert("Hit");
      }, 100);
    }
  } else {
    cell.setAttribute("class", "missed-cell cell");
    cell.setAttribute("disabled", "true");
    setTimeout(() => {
      alert("Miss");
    }, 100);
  }
});

cell3.addEventListener("click", () => {
  let cell = cell3;
  const value = cell.value;
  if (pos[value] == true) {
    scorePos++;
    changeScore();
    pos[value] = false;
    cell.setAttribute("class", "spotted-cell cell");
    cell.setAttribute("disabled", "true");
    if (isWin() == true) {
      setTimeout(() => {
        if (confirm("YOU WIN!\nWANT TO PLAY AGAIN?")) {
          replay();
        }
      }, 100);
    } else {
      setTimeout(() => {
        alert("Hit");
      }, 100);
    }
  } else {
    cell.setAttribute("class", "missed-cell cell");
    cell.setAttribute("disabled", "true");
    setTimeout(() => {
      alert("Miss");
    }, 100);
  }
});

cell4.addEventListener("click", () => {
  let cell = cell4;
  const value = cell.value;
  if (pos[value] == true) {
    scorePos++;
    changeScore();
    pos[value] = false;
    cell.setAttribute("class", "spotted-cell cell");
    cell.setAttribute("disabled", "true");
    if (isWin() == true) {
      setTimeout(() => {
        if (confirm("YOU WIN!\nWANT TO PLAY AGAIN?")) {
          replay();
        }
      }, 100);
    } else {
      setTimeout(() => {
        alert("Hit");
      }, 100);
    }
  } else {
    cell.setAttribute("class", "missed-cell cell");
    cell.setAttribute("disabled", "true");
    setTimeout(() => {
      alert("Miss");
    }, 100);
  }
});

cell5.addEventListener("click", () => {
  let cell = cell5;
  const value = cell.value;
  if (pos[value] == true) {
    scorePos++;
    changeScore();
    pos[value] = false;
    cell.setAttribute("class", "spotted-cell cell");
    cell.setAttribute("disabled", "true");
    if (isWin() == true) {
      setTimeout(() => {
        if (confirm("YOU WIN!\nWANT TO PLAY AGAIN?")) {
          replay();
        }
      }, 100);
    } else {
      setTimeout(() => {
        alert("Hit");
      }, 100);
    }
  } else {
    cell.setAttribute("class", "missed-cell cell");
    cell.setAttribute("disabled", "true");
    setTimeout(() => {
      alert("Miss");
    }, 100);
  }
});

cell6.addEventListener("click", () => {
  let cell = cell6;
  const value = cell.value;
  if (pos[value] == true) {
    scorePos++;
    changeScore();
    pos[value] = false;
    cell.setAttribute("class", "spotted-cell cell");
    cell.setAttribute("disabled", "true");
    if (isWin() == true) {
      setTimeout(() => {
        if (confirm("YOU WIN!\nWANT TO PLAY AGAIN?")) {
          replay();
        }
      }, 100);
    } else {
      setTimeout(() => {
        alert("Hit");
      }, 100);
    }
  } else {
    cell.setAttribute("class", "missed-cell cell");
    cell.setAttribute("disabled", "true");
    setTimeout(() => {
      alert("Miss");
    }, 100);
  }
});

