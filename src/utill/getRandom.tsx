export const getRandomColor = () => {
  const colors = [
    "#ff7aaa",
    "#ff3e39",
    "#3413bd",
    "#6b13bd",
    "#a8ff7a",
    "#2ed077",
    "#d9e67a",
    "#7adde6",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

export const getRandomLocaTop = () => {
  const topLoca = Math.floor(Math.random() * 41) + 40;

  return topLoca;
};

export const getRandomLocaLeft = () => {
  const leftLoca = Math.floor(Math.random() * 50) + 1;

  return leftLoca;
};
