// const lunch = new Object();
const lunch = {};

lunch.name = "김밥";
lunch.price = 3000;

lunch.price = 2500;
lunch.id = 1;

delete lunch.id;

console.log(lunch);

lunch.pay = function (user) {
    user.money -= this.price;
};

const user = {};

user.name = "홍길동";
user.money = 10000;

lunch.pay(user);
console.log(user);
