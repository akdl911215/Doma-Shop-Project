let copyright = "Copyright (c) 2020 YJYOON All rights reserved.";
let H = 34,
  W = 20; // field size

// 테트리스 도형 형태
let shapeArray = [
  [
    [2, 2],
    [1, 2],
    [1, 1],
    [0, 1],
  ],
  [
    [1, 1],
    [1, 0],
    [0, 2],
    [0, 1],
  ],
  [
    [2, 1],
    [1, 1],
    [1, 2],
    [0, 2],
  ],
  [
    [1, 2],
    [1, 1],
    [0, 1],
    [0, 0],
  ],
  [
    [1, 2],
    [1, 1],
    [0, 2],
    [0, 1],
  ],
  [
    [2, 0],
    [1, 1],
    [1, 0],
    [0, 0],
  ],
  [
    [1, 1],
    [0, 2],
    [0, 1],
    [0, 0],
  ],
  [
    [2, 2],
    [1, 2],
    [1, 1],
    [0, 2],
  ],
  [
    [1, 2],
    [1, 1],
    [1, 0],
    [0, 1],
  ],
  [
    [3, 1],
    [2, 1],
    [1, 1],
    [0, 1],
  ],
  [
    [1, 3],
    [1, 2],
    [1, 1],
    [1, 0],
  ],
  [
    [2, 2],
    [2, 1],
    [1, 1],
    [0, 1],
  ],
  [
    [1, 0],
    [0, 2],
    [0, 1],
    [0, 0],
  ],
  [
    [2, 2],
    [1, 2],
    [0, 2],
    [0, 1],
  ],
  [
    [1, 2],
    [1, 1],
    [1, 0],
    [0, 2],
  ],
  [
    [2, 2],
    [2, 1],
    [1, 2],
    [0, 2],
  ],
  [
    [2, 2],
    [2, 1],
    [2, 0],
    [1, 0],
  ],
  [
    [2, 1],
    [1, 1],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 2],
    [0, 2],
    [0, 1],
    [0, 0],
  ],
];
// 도형 로테이션
let shapeRotateMap = [
  1, 0, 3, 2, 4, 6, 7, 8, 5, 10, 9, 12, 13, 14, 11, 16, 17, 18, 15,
];
let shapeColorArray = [
  "rgb(199,82,82)",
  "rgb(233,174,43)",
  "rgb(105,155,55)",
  "rgb(53,135,145)",
  "rgb(49,95,151)",
  "rgb(102,86,167)",
];
let tileColor = "rgb(9,17,26)",
  shapeColor,
  wallColor = "rgb(22,41,63)";
let shapeColorIndex, nextColorIndex;
let movingThread, movingSpeed;
let fastMode = false;
let initSpeed = 500,
  deltaSpeed = 40,
  fastSpeed = 25;
let shapeCell;
let existField;
let shapePoint;
let createPoint = [1, parseInt(W / 2) - 2]; // W === 20
let currentShape, nextShape;
let score,
  level,
  levelStack = 0;
let isPaused = false;

init();

// 키 입력 처리

// onkeydown : 키를 눌렀을때 이벤트 (shift, alt, controll, capslock 등의 모든 키에 동작. 한영변환, 한자 등의 특수키는 인식 못함)
document.onkeydown = keyDownEventHandler;
function keyDownEventHandler(e) {
  switch (e.keyCode) {
    case 37: // 왼쪽 방향키
      setTimeout("moveLR(-1)", 0);
      break;
    case 39: // 오른쪽 방향키
      setTimeout("moveLR(1)", 0);
      break;
    case 32: // 스페이스
      setTimeout("rotateShape()", 0);
      break;
    case 40: // 아래 방향키
      moveFast();
      break;
    case 80: // p
      pause();
      break;
  }
}

// onkeyup : 키를 눌렀다가 땠을 때 이벤트 (onkeydown 에서 인식하는 키들을 인식)
document.onkeyup = keyUpEventHandler;
function keyUpEventHandler(e) {
  if (e.keyCode === 40) moveSlow();
}

// 초기 설정
function init() {
  drawField();
  initExistField();
  setWall();
  nextColorIndex = -1;
  movingSpeed = initSpeed;
  shapeCell = [];
  shapePoint = [1, 1];
  score = 0;
  level = 1;
  chooseNextShape();
  chooseNextColor();
  createShape();
}

function gebi(y, x) {
  // getElementById() : 주어진 문자열과 일치하는 id 속성을 가진 여소를 찾고, 이를 나타내는 Element 객체를 반환
  // ID는 문서 내에서 유일해야 하기 때문에 특정 요소를 빠르게 찾을 때 유용
  let ret = document.getElementById(String(y) + " " + String(x));
  return ret;
}

// 필드 초기화
function initExistField() {
  existField = new Array(H); // H === 34
  console.log("existField : ", existField);
  for (let i = 0; i < H; i++) {
    existField[i] = new Array(W); // W === 20 // 34개의 배열 existField 에 20개의 배열들을 한개씩 할당한다.
    console.log("🚀 >> existField[i]", existField[i]);
  }
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      existField[i][j] = false;
      console.log("🚀 >> existField[i][j]", existField[i][j]);
    }
  }
}
function drawField() {
  let fieldTag = '<table id="gameTable" border=0>';
  for (let i = 0; i < H; i++) {
    fieldTag += "<tr>";
    for (let j = 0; j < W; j++)
      fieldTag += '<td id="' + String(i) + " " + String(j) + '"></td>';
    fieldTag += "</tr>";
  }
  console.log("fieldTag : ", fieldTag);
  // document.wrtie() : document.open()에 의해 열린 문서 스팀에 텍스트 스트링을 적는다.
  // document.open() : 문서를 쓰기 위해 문서를 열 수 있도록 제공한다.
  document.write(fieldTag);
}
function setWall() {
  for (let i = 0; i < H; i++) {
    gebi(i, 0).style.background = wallColor;
    gebi(i, W - 1).style.background = wallColor;
    existField[i][0] = true;
    existField[i][W - 1] = true;
  }
  for (let i = 0; i < W; i++) {
    gebi(0, i).style.background = wallColor;
    gebi(H - 1, i).style.background = wallColor;
    existField[0][i] = true;
    existField[H - 1][i] = true;
  }
}

// 도형 생성
function chooseNextShape() {
  nextShape = parseInt(Math.random() * shapeArray.length);
  console.log("🚀 >> nextShape ::: ", nextShape);
  console.log("🚀 >> shapeArray.length :: ", shapeArray.length);
}
function chooseNextColor() {
  if (++nextColorIndex == shapeColorArray.length) nextColorIndex = 0;
}
function createShape() {
  shapePoint[0] = createPoint[0];
  console.log("🚀 >> shapePoint[0]", shapePoint[0]);
  shapePoint[1] = createPoint[1];
  console.log("🚀 >> shapePoint[1]", shapePoint[1]);
  currentShape = nextShape;
  console.log("🚀 >> currentShape", currentShape);
  currentColorIndex = nextColorIndex;
  console.log("🚀 >> currentColorIndex", currentColorIndex);
  shapeColor = shapeColorArray[currentColorIndex];
  console.log("🚀 >> shapeColor", shapeColor);
  let shape = shapeArray[currentShape];
  console.log("🚀 >> shape", shape);
  chooseNextShape();
  chooseNextColor();
  displayNextShape();
  for (let i = 0; i < shape.length; i++) {
    let sy = shapePoint[0] + shape[i][0];
    let sx = shapePoint[1] + shape[i][1];
    if (!isValidPoint(sy, sx)) gameOver();
    let el = gebi(parseInt(sy), parseInt(sx));
    el.style.background = shapeColor;
    shapeCell.push([sy, sx]);
  }
  levelStack++;
  leveling();
  movingThread = setTimeout("moveDown()", movingSpeed);
}
function displayNextShape() {
  initNextTable();
  let shape = shapeArray[nextShape];
  let color = shapeColorArray[nextColorIndex];
  for (let i = 0; i < 4; i++) {
    let y = shape[i][0];
    let x = shape[i][1];
    document.getElementById(String(y) + String(x)).style.background = color;
  }
}
function initNextTable() {
  for (let i = 0; i < 4; i++)
    for (let j = 0; j < 4; j++)
      document.getElementById(String(i) + String(j)).style.background =
        "rgb(14,31,49)";
}

// 도형 조작
function moveDown() {
  if (!canMove(1, 0)) {
    commitExist();
    checkLine();
    shapeCell = [];
    createShape();
    return;
  }
  removeShape();
  for (let i = 0; i < shapeCell.length; i++) shapeCell[i][0]++;
  shapePoint[0]++;
  showShape();
  movingThread = setTimeout("moveDown()", movingSpeed);
}
function rotateShape() {
  if (!canRotate()) return;
  removeShape();
  shapeCell = [];
  currentShape = shapeRotateMap[currentShape];
  let rotatedShape = shapeArray[currentShape];
  for (let i = 0; i < 4; i++) {
    let sy = shapePoint[0] + rotatedShape[i][0];
    let sx = shapePoint[1] + rotatedShape[i][1];
    shapeCell.push([sy, sx]);
  }
  showShape();
}
function canRotate() {
  let tempShape = shapeArray[shapeRotateMap[currentShape]];
  for (let i = 0; i < 4; i++) {
    let ty = shapePoint[0] + tempShape[i][0];
    let tx = shapePoint[1] + tempShape[i][1];
    if (!isValidPoint(ty, tx)) return false;
  }
  return true;
}
function isValidPoint(y, x) {
  return !(y <= 0 || y >= H - 1 || x <= 0 || x >= W - 1 || existField[y][x]);
}
function removeShape() {
  for (let i = 0; i < shapeCell.length; i++) {
    let el = gebi(shapeCell[i][0], shapeCell[i][1]);
    el.style.background = tileColor;
  }
}
function showShape() {
  for (let i = 0; i < shapeCell.length; i++) {
    let el = gebi(shapeCell[i][0], shapeCell[i][1]);
    el.style.background = shapeColor;
  }
}
function canMove(dy, dx) {
  for (let i = 0; i < shapeCell.length; i++) {
    let ny = shapeCell[i][0] + dy;
    let nx = shapeCell[i][1] + dx;
    if (!isValidPoint(ny, nx)) return false;
  }
  return true;
}
function moveLR(delta) {
  if (!canMove(0, delta) || isPaused) return;
  removeShape();
  for (let i = 0; i < shapeCell.length; i++) shapeCell[i][1] += delta;
  shapePoint[1] += delta;
  showShape();
}
function moveFast() {
  if (fastMode) return;
  // clearTimeout() 호출하여 이전에 설정된 시간 초과를 취소한다 setTimeout()
  clearTimeout(movingThread);
  movingSpeed = fastSpeed;
  movingThread = setTimeout("moveDown()", movingSpeed);
  fastMode = true;
}
function moveSlow() {
  if (!fastMode) return;
  clearTimeout(movingThread);
  movingSpeed = initSpeed - level * deltaSpeed;
  movingThread = setTimeout("moveDown()", movingSpeed);
  fastMode = false;
}

// 점수 판정
function commitExist() {
  for (let i = 0; i < shapeCell.length; i++) {
    let y = shapeCell[i][0];
    let x = shapeCell[i][1];
    existField[y][x] = true;
  }
}
function checkLine() {
  let plusScore = level * 100;
  let combo = 0;
  let finalScore = 0;
  for (let i = H - 2; i > 1; i--) {
    if (isFull(i)) {
      removeLine(i);
      i++;
      finalScore += updateScore(plusScore, ++combo);
    }
    if (combo > 0) displayCombo(combo, finalScore);
  }
}
function isFull(lineIndex) {
  for (let i = 1; i < W - 1; i++) if (!existField[lineIndex][i]) return false;
  return true;
}
function removeLine(lineIndex) {
  for (let i = lineIndex - 1; i >= 1; i--) {
    for (let j = 1; j < W - 1; j++) {
      gebi(i + 1, j).style.background = gebi(i, j).style.background;
      existField[i + 1][j] = existField[i][j];
    }
  }
}
function leveling() {
  if (level === 10) return;
  if (levelStack === level * 10) {
    level++;
    levelStack = 0;
    if (!fastMode) movingSpeed = initSpeed - level * deltaSpeed;
  }
  document.getElementById("level").innerHTML = level;
}
function updateScore(plusScore, combo) {
  let comboScore = plusScore * combo;
  score += comboScore;
  document.getElementById("score").innerHTML = score;
  return comboScore;
}
function displayCombo(combo, finalScore) {
  let comboStr = combo + " COMBO +" + finalScore;
  document.getElementById("comboField").innerHTML = comboStr;
  setTimeout(function () {
    document.getElementById("comboField").innerHTML = "";
  }, 700);
}

// 종료 및 일시정지
function gameOver() {
  clearTimeout(movingThread);
  initExistField();
  alert("[Game Over]\nLevel: " + level + "\nScore: " + score);
  document.getElementById("gameField").style.visibility = "hidden";
  document.getElementById("gameover").style.visibility = "visible";
}
function pause() {
  if (isPaused) {
    movingThread = setTimeout("moveDown()", movingSpeed);
    document.getElementById("pause").style.visibility = "hidden";
    document.getElementById("gameField").style.visibility = "visible";
    isPaused = false;
  } else {
    clearTimeout(movingThread);
    document.getElementById("gameField").style.visibility = "hidden";
    document.getElementById("pause").style.visibility = "visible";
    isPaused = true;
  }
}

function info() {
  alert(copyright);
}

//https://github.com/yjyoon-dev/vanilla-javascript-game/blob/master/tetris/tetris.js
