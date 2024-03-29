window.onload = function () {
  // 卡片翻转
  var card = document.querySelector('.card');
  card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
  });

  // 正方体
  var cube = document.querySelector('.cube');
  var box = document.querySelector('.box');
  var radioGroup = document.querySelector('.radio-group');
  var currentClass = '';

  function changeSide() {
    var checkedRadio = radioGroup.querySelector(':checked');
    var showClass = 'show-' + checkedRadio.value;

    if (currentClass) {
      cube.classList.remove(currentClass);
      box.classList.remove(currentClass);
    }

    cube.classList.add(showClass);
    box.classList.add(showClass);

    currentClass = showClass;
  }
  // set initial side
  changeSide();

  radioGroup.addEventListener('change', changeSide);


  // 旋转木马
  var carousel = document.querySelector('.carousel');
  var cells = carousel.querySelectorAll('.carousel__cell');
  var cellCount;
  var selectedIndex = 0;
  var cellWidth = carousel.offsetWidth;
  var cellHeight = carousel.offsetHeight;
  var isHorizontal = true;
  var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
  var radius, theta;

  function rotateCarousel() {
    var angle = theta * selectedIndex * -1;
    carousel.style.transform = 'translateZ(' + -radius + 'px) ' + rotateFn + '(' + angle + 'deg)';
  }

  var prevButton = document.querySelector('.previous-button');
  prevButton.addEventListener('click', function () {
    selectedIndex--;
    rotateCarousel();
  });

  var nextButton = document.querySelector('.next-button');
  nextButton.addEventListener('click', function () {
    selectedIndex++;
    rotateCarousel();
  });

  // 显示多少格子
  var cellsRange = document.querySelector('.cells-range');
  cellsRange.addEventListener('change', changeCarousel);
  cellsRange.addEventListener('input', changeCarousel);

  function changeCarousel() {
    cellCount = cellsRange.value;
    theta = 360 / cellCount;
    var cellSize = isHorizontal ? cellWidth : cellHeight;
    radius = Math.round((cellSize / 2) / Math.tan(Math.PI / cellCount));

    for (var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      if (i < cellCount) {
        // visible cell
        cell.style.opacity = 1;
        var cellAngle = theta * i;
        cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
      } else {
        // hidden cell
        cell.style.opacity = 0;
        cell.style.transform = 'none';
      }
    }

    rotateCarousel();
  }

  var orientationRadios = document.querySelectorAll('input[name="orientation"]');
  (function () {
    for (var i = 0; i < orientationRadios.length; i++) {
      var radio = orientationRadios[i];
      radio.addEventListener('change', onOrientationChange);
    }
  })();

  // 方向更改
  function onOrientationChange() {
    var checkedRadio = document.querySelector('input[name="orientation"]:checked');
    isHorizontal = checkedRadio.value == 'horizontal';
    rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
    changeCarousel();
  }

  // set initials
  onOrientationChange();
}
