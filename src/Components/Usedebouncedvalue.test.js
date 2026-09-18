import { renderHook, act } from "@testing-library/react";
import { useDebouncedValue } from "./useDebouncedValue";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

test("returns the initial value immediately", () => {
  const { result } = renderHook(() => useDebouncedValue("a", 300));
  expect(result.current).toBe("a");
});

test("updates only after the delay has passed", () => {
  const { result, rerender } = renderHook(
    ({ value }) => useDebouncedValue(value, 300),
    { initialProps: { value: "a" } }
  );

  rerender({ value: "ab" });
  expect(result.current).toBe("a");

  act(() => {
    jest.advanceTimersByTime(300);
  });

  expect(result.current).toBe("ab");
});