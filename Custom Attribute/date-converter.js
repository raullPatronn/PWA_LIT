export const dateConverter = {
  toAttribute: (date) => {
    return date.toString();
  },
  fromAttribute: (value) => {
    return new Date(value);
  },
};
