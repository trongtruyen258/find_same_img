let divNum1;
$("#add_number").click(function () {
  if (checkExistItemClass() != false) {
    $(".container").empty();
  }
  const totalNum = Number($("#total_num").val());
  let arrayNum = [];
  arrayNum = createArr(totalNum);
  loadNumber(arrayNum);
});
function createArr(totalNum) {
  let array = [];
  if (array.length == 0) {
    let elementNum = getRndInteger(totalNum / 2);
    array.push(elementNum);
  }
  for (let i = 1; i < totalNum; i++) {
    let elementNum = getRndInteger(totalNum / 2);
    while (checkExistNum(array, elementNum) != false) {
      elementNum = getRndInteger(totalNum / 2);
    }
    array.push(elementNum);
  }
  return array;
}
function loadNumber(array) {
  for (let i = 0; i < array.length; i++) {
    $("div.container").append(
      `<div class="item" onclick="changeActive(this)">
        ${array[i]}
        </div>
        `
    );
  }
}
function getRndInteger(max) {
  return Math.floor(Math.random() * max) + 1;
}
function checkExistNum(arrayNum, numberCheck) {
  let timeOfNum = 0;
  for (let i = 0; i < arrayNum.length; i++) {
    if (numberCheck == arrayNum[i]) {
      timeOfNum += 1;
    }
  }
  if (timeOfNum < 2) {
    return false; //not exist
  } else {
    return true; //existed
  }
}
function changeActive(me) {
  me.classList.add("active");
  if (divNum1 != null) {
    if (divNum1.textContent == me.textContent) {
      divNum1.classList.add("num_same");
      me.classList.add("num_same");
    } else {
      divNum1.classList.remove("active");
      me.classList.remove("active");
    }
    divNum1 = null;
  } else {
    divNum1 = me;
  }
}
function checkExistItemClass() {
  let elems = document.getElementsByClassName("item");
  if (elems.length != 0) {
    return true; //existed
  } else {
    return false; //not exist
  }
}
