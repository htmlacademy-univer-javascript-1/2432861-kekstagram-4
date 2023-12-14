export const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

export const addHiddenClass = (element) => element.classList.add('hidden');
export const removeHiddenClass = (element) => element.classList.remove('hidden');
export const removeModalOpenClass = (element) => element.classList.remove('modal-open');
export const addModalOpenClass = (element) => element.classList.add('modal-open');
