const fn = require("./fn");

/**
 * before test가 시작 되기전에 이루어지는것
 * after test가 시작 된 후에 이루어지는것
 * All test 전체에 적용되어지는것
 */


beforeAll(() => console.log("밖 beforeAll")); //실행순서 1
beforeEach(() => console.log("밖 beforeEach")); //2,6
afterEach(() => console.log("밖 afterEach")); //4,10
afterAll(() => console.log("밖 afterAll")); //마지막

test("0+1 =1이다.", () => {
  //3
  console.log("밖 TEST");
  expect(fn.add(0, 1)).toBe(1);
});

describe("안작업", () => {
  beforeAll(() => console.log("안 beforeAll")); //5
  beforeEach(() => console.log("안 beforeEach")); //7
  afterEach(() => console.log("안 afterEach")); //9
  afterAll(() => console.log("안 afterAll")); //마지막 -1

  test("0+1 =1이다.", () => {
    //8
    console.log("안 TEST");
    expect(fn.add(0, 1)).toBe(1);
  });
});
