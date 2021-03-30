const images = [
  '../public/city-5772040_1920.jpg',
  '../public/fog-6122490_1920.jpg',
  '../public/leaves-5610361_1920.png',
];

const image = document.getElementsByClassName('image')[0];
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const indicatorWrapper = document.querySelector('.indicator-wrapper');

let curIndex = 0;

const slideToPrev = () => {
  if (curIndex > 0) {
    image.src = images[--curIndex];
  } else {
    image.src = images[(curIndex = images.length - 1)];
  }
  document.getElementById(`index${curIndex}`).checked = true;
};

const slideToNext = () => {
  if (curIndex < images.length - 1) {
    image.src = images[++curIndex];
  } else {
    image.src = images[(curIndex = 0)];
  }
  document.getElementById(`index${curIndex}`).checked = true;
};

const selectSlide = (index) => {
  image.src = images[index];
};

const createIndicators = () => {
  images.forEach((image, index) => {
    const indicatorGroup = document.createElement('div');
    const radio = document.createElement('input');
    const label = document.createElement('label');

    indicatorGroup.classList.add('indicator-group');
    radio.classList.add('indicator');
    radio.setAttribute('type', 'radio');
    radio.setAttribute('name', 'slider');
    radio.setAttribute('id', `index${index}`);
    label.setAttribute('for', `index${index}`);

    radio.addEventListener('click', () => {
      selectSlide(index);
    });

    indicatorGroup.append(radio, label);
    indicatorWrapper.append(indicatorGroup);
  });

  document.getElementById(`index${curIndex}`).checked = true;
};

prevButton.addEventListener('click', slideToPrev);
nextButton.addEventListener('click', slideToNext);

window.onload = createIndicators();
