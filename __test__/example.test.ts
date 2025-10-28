describe('Example Test', () => {
  it('should return true for a basic boolean check', () => {
    const value = true;
    expect(value).toBe(true);
  });

  it('should add numbers correctly', () => {
    const sum = (a: number, b: number) => a + b;
    expect(sum(1, 2)).toBe(3);
  });
});
