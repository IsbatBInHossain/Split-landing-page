const container = document.querySelector('.container');

const handleLeftClick = () => {
  container.classList.remove('hover-right');
  container.classList.toggle('hover-left');
};
const handleRightClick = () => {
  container.classList.remove('hover-left');
  container.classList.toggle('hover-right');
};

document
  .querySelector('.split.left')
  .addEventListener('click', handleLeftClick);
document
  .querySelector('.split.right')
  .addEventListener('click', handleRightClick);
