const { format_date } = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');
    expect(format_date(date)).toBe('3/20/2020');
});

const {format_plural} = require('../utils/helpers')


test('format_plural() returns a pluralized word', () => {
      const plural = format_plural('apple', 2);
      const single = format_plural('melon', 1);
      
      expect(plural).toBe('apples');
      expect(single).toBe('melon');
});