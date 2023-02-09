export const dateConverter = (locale) => {
  return {
    toAttribute: (date) => {
      return date.toLocaleDateString(locale);
    },
    fromAttribute: (value) => {
      return new Date(value);
    },
  };
};
