const fn = {
  add: (num1, num2) => num1 + num2,

  createUser: name=>{
    console.log("실제로 사용자가 생성되었습니다.");
    return{
      name,
    }
  },

  // makeUser(name, age){
  //   return {name,age}
  // },

  makeUser: (name, age) => ({ name, age, gender: undefined }),

  throwErr: () => {
    throw new Error("xx");
  },

  getName: (callback) => {
    const name = "MIKE";
    setTimeout(() => {
      callback(name);
      // throw new Error("서버 에러");
    }, 1000);
  },

  getAge: () => {
    const age = 30;
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(age);
      }, 1000);
    });
  },

  connectUserDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          name: "Mike",
          age: 30,
          gender: "male",
        });
      }, 500);
    });
  },

  disconnectUserDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },
};


module.exports = fn;