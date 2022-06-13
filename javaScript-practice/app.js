const people = {
    name: "son",
    score: 100,
    sing: function (name) {
        console.log(name + " is singing");
    }
};

console.log("이름: " + people.name);
console.log("점수: " + people.score);

people.nickname = "EKA";
console.log(people);
people.sing("SON");


const cal = {
    plus: function (a, b) {
        console.log(a + b);
    },
    minus: function (a, b) {
        return a - b;
    }
}

cal.plus(1,2);
const minus3And4 = cal.minus(3,4);
alert(minus3And4);

const i = 1;
while(i) {
    const secretNumber = prompt("숫자를 입력하세요.");
    if(!isNaN(secretNumber)) {
        i = 0;
    }
}

console.log(secretNumber);