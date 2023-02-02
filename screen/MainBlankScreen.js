window.addEventListener('load', function () {
  localStorage.removeItem('colorHistory')
})
const colors = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "brown", "grey"];
const circles = document.querySelectorAll(".fstCircle");
const texts = document.querySelectorAll(".fstCircleText");
const emptyText = document.getElementById("emptyText").innerHTML;
let number = 0;
console.log("circles", circles)
console.log('texts', texts);

document.querySelector("#next").addEventListener("click", function () {
  // console.log('emptyText',emptyText);
  document.getElementById("emptyText").innerHTML = "";

  let randomNumber = 0
  let colorHistory = []
  colorHistory = JSON.parse(localStorage.getItem("colorHistory")) || [];



  if (colorHistory.length !== number) {
    const nextColor = colorHistory[number]
    console.log('getPriviusClr', nextColor);
 
    const nextColorRecord = []
    for (const color in nextColor) {
      nextColorRecord.push(nextColor[color])
    }


    document.getElementById('fstColor').style.backgroundColor = nextColor.randomColor0;
    document.getElementById('secondColor').style.backgroundColor = nextColor.randomColor1;
    document.getElementById('thiredColor').style.backgroundColor = nextColor.randomColor2;

    document.getElementById('fstname').innerHTML = nextColor.randomColor0;
    document.getElementById('secondname').innerHTML = nextColor.randomColor1;
    document.getElementById('thiredname').innerHTML = nextColor.randomColor2;



    let html = ''


    colorHistory?.forEach((element, index) => {
      // console.log('index', index, number);
      html += ` 
        <div class="colorTodoContainer ${index === number ? 'background' : ''}" id="rendomcolor${index}" onclick="colorChangeClick(${element.id})">
          <div class="firstColort"  style='background-color: ${element.randomColor0}'></div>
          <div class="firstColort"  style='background-color: ${element.randomColor1}'></div>
          <div class="firstColort"  style='background-color: ${element.randomColor2}'></div>
      </div>`

    });
    let colorContainer = document.querySelector('#tasks');
    colorContainer.innerHTML = html;

    number++

    return
  }
  const colorObj = {
    id: colorHistory.length + 1
  }

  circles.forEach((circle, index) => {
    randomNumber = Math.floor(Math.random() * colors.length);
    circle.style.backgroundColor = colors[randomNumber];
    texts[index].innerHTML = colors[randomNumber];
    let color = `randomColor${index}`
    colorObj[color] = colors[randomNumber]

  });
  colorHistory.push(colorObj)
  localStorage.setItem("colorHistory", JSON.stringify(colorHistory));


  let allColorHistory = []
  allColorHistory = JSON.parse(localStorage.getItem("colorHistory")) || []
  console.log('allColorHistory', allColorHistory);

  let html = ''


  allColorHistory?.forEach((element, index) => {
    // console.log('index', index, number);
    html += ` 
      <div class="colorTodoContainer ${index === number ? 'background' : ''}" id="rendomcolor${index}" onclick="colorChangeClick(${element.id})">
        <div class="firstColort"  style='background-color: ${element.randomColor0}'></div>
        <div class="firstColort"  style='background-color: ${element.randomColor1}'></div>
        <div class="firstColort"  style='background-color: ${element.randomColor2}'></div>
    </div>`

  });
  let colorContainer = document.querySelector('#tasks');
  colorContainer.innerHTML = html;

  number++

});


let buttonSelector = document.querySelector('#previous')
console.log('number', number, buttonSelector);
window.addEventListener('load', function () {
  if (number <= 1) {
    buttonSelector.disabled = true;
    buttonSelector.style.opacity = 0.5;
  }
  buttonSelector.disabled = false;
  buttonSelector.style.opacity = 1;
})


document.querySelector("#previous").addEventListener("click", function () {
  console.log("button", buttonSelector)
  if (number < 2) return
  // console.log('number', number);
  let colorHistory = []
  colorHistory = JSON.parse(localStorage.getItem("colorHistory")) || [];

  const getPriviusClr = colorHistory[number - 2]

  console.log('getPriviusClr', getPriviusClr);

  const previousColor = []
  for (const color in getPriviusClr) {
    previousColor.push(getPriviusClr[color])

  }

  console.log('previousColor', previousColor);

  document.getElementById('fstColor').style.backgroundColor = getPriviusClr.randomColor0;
  document.getElementById('secondColor').style.backgroundColor = getPriviusClr.randomColor1;
  document.getElementById('thiredColor').style.backgroundColor = getPriviusClr.randomColor2;

  document.getElementById('fstname').innerHTML = getPriviusClr.randomColor0;
  document.getElementById('secondname').innerHTML = getPriviusClr.randomColor1;
  document.getElementById('thiredname').innerHTML = getPriviusClr.randomColor2;


  let html = ''


  colorHistory?.forEach((element, index) => {
    // console.log('index', index, number);

    html += ` 
        <div class="colorTodoContainer ${number - 2 === index ? 'background' : ''}" id="rendomcolor${index}" onclick="colorChangeClick(${element.id})">
          <div class="firstColort"  style='background-color: ${element.randomColor0}'></div>
          <div class="firstColort"  style='background-color: ${element.randomColor1}'></div>
          <div class="firstColort"  style='background-color: ${element.randomColor2}'></div>
      </div>`

  });
  let colorContainer = document.querySelector('#tasks');
  colorContainer.innerHTML = html;

  console.log('number', number);

  number--
});


const colorChangeClick = (idindex) => {
  console.log('dhsgvfjhc', idindex);


  const colorHistory = JSON.parse(localStorage.getItem("colorHistory")) || []
  console.log('colorHistory', colorHistory);
  let matcheid = colorHistory.find((id) => id.id === idindex);
  console.log('matcheid', matcheid);

  number = matcheid.id;

  document.getElementById('fstColor').style.backgroundColor = matcheid.randomColor0;
  document.getElementById('secondColor').style.backgroundColor = matcheid.randomColor1;
  document.getElementById('thiredColor').style.backgroundColor = matcheid.randomColor2;

  document.getElementById('fstname').innerHTML = matcheid.randomColor0;
  document.getElementById('secondname').innerHTML = matcheid.randomColor1;
  document.getElementById('thiredname').innerHTML = matcheid.randomColor2;


  let html = ''

  colorHistory?.forEach((element, index) => {
    // console.log('index', index, number);

    html += ` 
        <div class="colorTodoContainer ${matcheid.id === index + 1 ? 'background' : ''}" id="rendomcolor${index}" onclick="colorChangeClick(${element.id})">
          <div class="firstColort"  style='background-color: ${element.randomColor0}'></div>
          <div class="firstColort"  style='background-color: ${element.randomColor1}'></div>
          <div class="firstColort"  style='background-color: ${element.randomColor2}'></div>
      </div>`

  });
  let colorContainer = document.querySelector('#tasks');
  colorContainer.innerHTML = html;

  console.log('number', number);

}