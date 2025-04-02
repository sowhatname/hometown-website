// 根据是否来过郏县旅游显示相应内容
const visitedRadio = document.querySelectorAll('input[type="radio"][name="visited"]');
const visitedYesDiv = document.getElementById('visited-yes');
const visitedNoDiv = document.getElementById('visited-no');
visitedRadio.forEach((radio) => {
  radio.addEventListener('change', () => {
    if (radio.value === 'yes') {
      visitedYesDiv.style.display = 'block';
      visitedNoDiv.style.display = 'none';
    } else {
      visitedYesDiv.style.display = 'none';
      visitedNoDiv.style.display = 'block';
    }
  });
});

// 根据未来是否有来郏县旅游计划显示相应内容
const futureVisitRadio = document.querySelectorAll('input[type="radio"][name="futureVisit"]');
const futureVisitYesDiv = document.getElementById('futureVisit-yes');
futureVisitRadio.forEach((radio) => {
  radio.addEventListener('change', () => {
    if (radio.value === 'yesFuture') {
      futureVisitYesDiv.style.display = 'block';
    } else {
      futureVisitYesDiv.style.display = 'none';
    }
  });
});

// 根据是否品尝过郏县美食显示相应内容
const tastedFoodRadio = document.querySelectorAll('input[type="radio"][name="tastedFood"]');
const tastedFoodYesDiv = document.getElementById('tastedFood-yes');
tastedFoodRadio.forEach((radio) => {
  radio.addEventListener('change', () => {
    if (radio.value === 'yesFood') {
      tastedFoodYesDiv.style.display = 'block';
    } else {
      tastedFoodYesDiv.style.display = 'none';
    }
  });
});