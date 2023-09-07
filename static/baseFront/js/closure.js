// 闭包
function person(name) {
  var age = 18;
  return function() {
    ++age;
    console.log(name, age);
  }
}

const person1 = person('person1');
const person2 = person('person2');

person1();
person1();
person2();
person1();
person2();