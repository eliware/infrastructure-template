test('infrastructure-template.mjs can be imported without error', async () => {
  process.env.LOG_LEVEL = 'none';
  await import('../infrastructure-template.mjs');
  expect(true).toBe(true);
});
