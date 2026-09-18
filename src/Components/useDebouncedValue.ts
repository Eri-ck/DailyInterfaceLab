import { useEffect, useState } from "react";

// Day 96 - typed generic hook, tested with renderHook + fake timers.
// Not tied to any specific search/autocomplete UI (those already exist
// in the lab) — this exercise is about the hook and its test, not a new widget.
export function useDebouncedValue<T>(value: T, delayMs: number): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(timer);
  }, [value, delayMs]);

  return debounced;
}
