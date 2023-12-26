export const addHiddenClass = (element) => element.classList.add('hidden');
export const removeHiddenClass = (element) => element.classList.remove('hidden');
export const removeModalOpenClass = (element) => element.classList.remove('modal-open');
export const addModalOpenClass = (element) => element.classList.add('modal-open');

export const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
