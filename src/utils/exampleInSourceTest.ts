// the implementation
export default function exampleInSourceTest(...args: number[]) {
  return args.reduce((a, b) => a + b, 0);
}

// in-source test suites
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it('exampleInSourceTest', () => {
    expect(exampleInSourceTest()).toBe(0);
    expect(exampleInSourceTest(1)).toBe(1);
    expect(exampleInSourceTest(1, 2, 3)).toBe(6);
  });
}
