// mock function

// const mockFn = jest.fn();

// describe("mockFn설명1", () => {
//   beforeAll(() => {
//     mockFn();
//     mockFn(1);
//   });

//   test("Test", () => {
//     console.log(mockFn.mock.calls);
//     //mock.calls를 통해서 알수있는것은
//     //몇번 호출되었는지 어떤 인수가 들어갔는지
//     expect("dd").toBe("dd"); //[[],[1]]
//   });
//   console.log(mockFn.mock.calls);
//   test("함수는 2번 호출됩니다.", () => {
//     expect(mockFn.mock.calls.length).toBe(2);
//   });

//   test("2번째로 호출된 함수에 전달된 첫번째 인수는 1입니다.", () => {
//     expect(mockFn.mock.calls[1][0]).toBe(1);
//   });
// });

//==========================================

// const mockFn = jest.fn();

// function forEachAdd(arr) {
//   arr.forEach((num) => {
//     mockFn(num + 1);
//   });
// }

// forEachAdd([10, 20, 30]);

// test("함수의 호출은 3번 됩니다.", () => {
//   expect(mockFn.mock.calls.length).toBe(3);
// });

// test("함수에 전달된 값은 11,21,31 입니다.", () => {
//   expect(mockFn.mock.calls[0][0]).toBe(11);
//   expect(mockFn.mock.calls[1][0]).toBe(21);
//   expect(mockFn.mock.calls[2][0]).toBe(31);
// });

//==========================================

// const mockFn = jest.fn((num) => num + 1);

// mockFn(10);
// mockFn(20);
// mockFn(30);

// test("mockFn은 3번 출력이 된다.", () => {
//   console.log(mockFn.mock.results);
//   //  [
//   //   { type: 'return', value: 11 },
//   //   { type: 'return', value: 21 },
//   //   { type: 'return', value: 31 }
//   // ]
//   expect(mockFn.mock.calls.length).toBe(3);
// });

// test("10에서 1이 증가한 값이 반환된다.", () => {
//   expect(mockFn.mock.results[0].value).toBe(11);
// });
// test("20에서 1이 증가한 값이 반환된다.", () => {
//   expect(mockFn.mock.results[1].value).toBe(21);
// });
// test("30에서 1이 증가한 값이 반환된다.", () => {
//   expect(mockFn.mock.results[2].value).toBe(31);
// });

//==========================================

// const mockFn = jest.fn();

// mockFn
//   .mockReturnValueOnce(10)
//   .mockReturnValueOnce(20)
//   .mockReturnValueOnce(30)//우선순위가 Value보다 높고 한번만 실행됢
//   .mockReturnValue(40);//지속적으로 반영이된다.

// mockFn();
// mockFn();
// mockFn();
// mockFn();

// test("dd", () => {
//   console.log(mockFn.mock.results);
//   expect("dd").toBe("dd");
// });

//==========================================

//홀수만filter하는 mock함수 만들기

// const mockFn = jest.fn();

// mockFn
//   .mockReturnValueOnce(true)
//   .mockReturnValueOnce(false)
//   .mockReturnValueOnce(true)
//   .mockReturnValueOnce(false)
//   .mockReturnValue(true); //지속적으로 반영이된다.

// const result = [1, 2, 3, 4, 5].filter((num) => mockFn(num));

// test("홀수는 1,3,5", () => {
//   console.log(mockFn.mock.results);
//   expect(result).toStrictEqual([1,3,5]);
// });

//==========================================

// 비동기함수 mock함수로 만들기
// const mockFn = jest.fn();

// mockFn.mockResolvedValue({ name: "Mike" });

// test("받아온 이름은 Mike", () => {
//   mockFn().then((res) => {
//     expect(res.name).toBe("Mike");
//   });
// });

//==========================================

//실제 DB가 생성되지 않도록 mocking하는법

const fn = require("./fn");

//함수는 사용하지만 실제 DB에 저장이되는것은 아니다
jest.mock("./fn");
fn.createUser.mockReturnValue({ name: "Mike" });

test("유저를 만든다.", () => {
  const user = fn.createUser("Mike");
  expect(user.name).toBe("Mike");
});

//==========================================

const mockFn = jest.fn();

mockFn(10, 20);
mockFn();
mockFn(30, 40);

test("한번이상 호출", () => {
  expect(mockFn).toBeCalled();
});

test("정확히 3번 호출", () => {
  expect(mockFn).toBeCalledTimes(3);
});

test("10이랑 20 전달받은 함수가 있는가", () => {
  expect(mockFn).toBeCalledWith(10, 20);
});

test("마지막 함수는 30이랑 40 받았음", () => {
  expect(mockFn).lastCalledWith(30, 40);
});
