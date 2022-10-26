const fn = require("./fn");

describe("step1", () => {
  test("1은1이다.", () => {
    expect(1).toBe(1);
  });

  test("2+3은 5이다.", () => {
    expect(fn.add(2, 3)).toBe(5);
  });

  test("3+3은 6이다.", () => {
    expect(fn.add(3, 3)).toBe(6);
  });

  test("3+3은 5가 아니다.", () => {
    expect(fn.add(3, 3)).not.toBe(5);
  });
});
//=======================================

describe("step2", () => {
  it("step2)2+3은 5이다.", () => {
    expect(fn.add(2, 3)).toBe(5); //toBe 적용시
  });

  it("step2)2+3은 5이다.", () => {
    expect(fn.add(2, 3)).toEqual(5); //toEqual 적용시
  });

  test("step2이름과 나이를 전달받아서 객체를 반환", () => {
    expect(fn.makeUser("Jim", 23)).toEqual({
      name: "Jim",
      age: 23,
    });
  });

  /**
   * toStrictEqual을 사용하는게 권고 됢 그리고 이거 쓸거임 슈바아아
   */
  // test("step2이름과 나이를 전달받아서 객체를 반환", () => {
  //   expect(fn.makeUser("Jim", 23)).toStrictEqual({
  //     name: "Jim",
  //     age: 23,
  //   });
  // });
});

//=======================================

describe("강좌2", () => {
  //toBeNull null 이면 ok
  //toBeUndefined undefined 이면 ok
  //toBeDefined defined 이면 Ok
  test("null 이면 null 이다.", () => {
    expect(null).toBeNull();
  });

  //toBeTruthy
  //toBeFalsy
  test("0은 false 입니다.", () => {
    expect(fn.add(1, -1)).toBeFalsy();
  });

  test("비어있지 않은 문자열은 true입니다.", () => {
    expect(fn.add("hello", "world")).toBeTruthy();
  });

  //toBeGreaterThan크다
  //toBeGreaterThanOrEqual크다
  //toBeLessThan크다
  //toBeLessThanOrEqual크다
  test("ID는 10자 이하여야 한다.", () => {
    const id = "THE BLACK";
    expect(id.length).toBeLessThanOrEqual(10);
  });

  test("비밀번호는 4자리이다", () => {
    const pw = "1234";
    expect(pw.length).toBe(4);
  });

  test("비밀번호는 4자리이다", () => {
    const pw = "1234";
    expect(pw.length).toEqual(4);
  });

  test("0.1더하기 0.2는 0.3입니다.", () => {
    expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test("Hello  World에 a라는 글자가 있나", () => {
    expect("Hello World").toMatch(/h/i); //여기서 i의 역할은 소문자 대문자 구분을 없엔다.
  });

  //toContain 이 값이 들어 있나(배열)
  test("MIKE가 배열에 들어가있나?", () => {
    const userList = ["JIM", "KEIN", "MIKE"];
    const user = "JIM";
    expect(userList).toContain(user); //userList에 user가 들어가 있나?
  });

  test("예외사항 처리", () => {
    expect(() => fn.throwErr()).toThrow(); //예외사항이 나오면 패스
  });
});

//=======================================

describe("강좌3", () => {
  //비동기 함수 사용시

  /**
 *테스트 코드는 테스트 코드 안에서 맨밑에 줄이 실행이 되고나면 바로 끝을 내버린다.
 이러한 경우를 막기 위해 마지막으로 끝날 곳에다가 done이라는 함수가 호출되게 세팅한다.
 */
  //비동기 함수
  test("1초 후에 받아온 이름은 MIKE", (done) => {
    function callback(name) {
      expect(name).toBe("MIKE");
      done();
    }
    fn.getName(callback);
  });

  //Promise
  test("1초 후에 받는 나이는 30살", () => {
    return fn.getAge().then((age) => {
      //return을 붙여야 끝까지 실행됨(promise 경우)
      expect(age).toBe(30);
    });
  });

  //Promise
  //resolves, rejects
  test("1초 후에 받는 나이는 30살", () => {
    return expect(fn.getAge()).resolves.toBe(30);
  });

  //async, await
  test("1초 후에 받는 나이는 30살", async () => {
    const age = await fn.getAge();
    expect(age).toBe(30);
  });
});

//=======================================

describe("강좌4", () => {
  
});
