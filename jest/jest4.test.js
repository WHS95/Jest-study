const fn = require("./fn");

// let num = 0;

beforeEach(() => {
  num = 0;
});

describe("강좌 4 테스트 전후 작업 #1", () => {
  test("0 더하기 1은 1이다.", () => {
    num = fn.add(num, 1);
    expect(num).toBe(1);
  });

  test("0 더하기 2은 2이다.", () => {
    num = fn.add(num, 2);
    expect(num).toBe(2);
  });

  test("0 더하기 3은 3이다.", () => {
    num = fn.add(num, 3);
    expect(num).toBe(3);
  });

  test("0 더하기 4은 4이다.", () => {
    num = fn.add(num, 4);
    expect(num).toBe(4);
  });
});

/**
 * beforeEach
 * beforAll
 * afterEach
 * afterAll
 */
describe("강좌 4 테스트 전후 작업 #2", () => {
  // beforeEach(async () => {
  //   user = await fn.connectUserDb();
  // });
  beforeAll(async () => {
    user = await fn.connectUserDb();
  });

  // afterEach(async () => {
  //   return fn.disconnectUserDb();
  // });
  afterAll(async () => {
    return fn.disconnectUserDb();
  });

  test("유저의 이름은 Mike 이다.", () => {
    expect(user.name).toBe("Mike");
  });

  test("유저의 나이는 30살 이다.", () => {
    expect(user.age).toBe(30);
  });

  test("유저의 성별은 male 이다.", () => {
    expect(user.gender).toBe("male");
  });
});
