import React from "react";
import Counter from "./Counter";
import { render, fireEvent , cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId ;
beforeEach(() => {
    const component = render(<Counter />);
    getByTestId= component.getByTestId
})

afterEach(() => {
    cleanup()
})
test("header render correctly", () => {
  const headerEl = getByTestId("header");

  expect(headerEl.textContent).toBe("My Counter");
});

test("counter initially start with text of 0", () => {
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
});

test("input containa initial value 1", () => {
  const inputEl = getByTestId("input");
  expect(inputEl.value).toBe("1");
});

test("change value of input works correctly", () => {
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  expect(inputEl.value).toBe("5");
});

test("click on plus btn adds 1 to counter ", () => {
  const btnEl = getByTestId("add-btn");
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");

  fireEvent.click(btnEl);
  expect(counterEl.textContent).toBe("1");
});

test("click on subtract btn subtract 1 from counter ", () => {
  const btnEl = getByTestId("sub-btn");
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");

  fireEvent.click(btnEl);
  expect(counterEl.textContent).toBe("-1");
});

test("change inputValue then clicking on add-btn works correctly", () => {
  const btnEl = getByTestId("add-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(btnEl);
  expect(counterEl.textContent).toBe("5");
});

test("change inputValue then clicking on sub-btn works correctly", () => {
  const btnEl = getByTestId("sub-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(btnEl);
  expect(counterEl.textContent).toBe("-5");
});

test("counter contains coreect className ", () => {
  const sub_btnEl = getByTestId("sub-btn");
  const add_btnEl = getByTestId("add-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "50",
    },
  });
  fireEvent.click(add_btnEl);
  fireEvent.click(add_btnEl);
  expect(counterEl.className).toBe("green");

  fireEvent.click(sub_btnEl);
  fireEvent.click(sub_btnEl);
  fireEvent.click(sub_btnEl);
  fireEvent.click(sub_btnEl);

  expect(counterEl.className).toBe("red");
});

test("add button render with +", () => {
  const addBtn = getByTestId("add-btn");
  expect(addBtn.textContent).toBe("+");
});

test("subtractBtn button render with - ", () => {
  const subBtn = getByTestId("sub-btn");
  expect(subBtn.textContent).toBe("-");
});
