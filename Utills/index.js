export const findByTestArra = (component, attr) => {
  return component.find(`[data-test='${attr}']`);
};
