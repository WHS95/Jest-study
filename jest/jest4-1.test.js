const fn = require("./fn");

let num = 0;

test("0+1 = 1", () => {
  expect(fn.add(num, 1)).toBe(1);
});

test("0+2 = 2", () => {
  expect(fn.add(num, 2)).toBe(2);
});

//test.skip을 하게 되면 이 테스트 코드는 무시
test.skip("0+3 = 3", () => {
  expect(fn.add(num, 3)).toBe(3);
  num = 10;
});

//test.only를 하게 되면 이 테스트 코드 만 실행
test.only("0+4 = 4", () => {
  expect(fn.add(num, 4)).toBe(4);
});
