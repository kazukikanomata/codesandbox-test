// const let 変数宣言
// var val1 = "val変数";
// console.log(val1);

// // var変数は上書きが可能である。
// val1 = "val変数は上書きが可能である";
// console.log(val1);
// // var 変数は再宣言
// var val1 = "var変数は再宣言";
// console.log(val1);

// // let
// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数は上書き";
// console.log(val2);

// //  let再宣言不可能

//  const
// const val3 = "const変数";
// console.log(val3);

// const 上書き不可
// val3 = "const変数は上書き";

// const val3 = "const変数は再宣言";

// const で定義したオブジェクトのプロパティは変更が可能
// const val4 = {
//   name: "じゃけえ",
//   age: 28
// };
// val4.name = "jak";
// val4.address = "1234";
// console.log(val4);

// const で定義した配列は変更が可能
// const val5 = ["dog,", "cat"];
// val5[0] = "bird";
// // add monkey
// val5.push("monkey");
// console.log(val5);

// template文字列
// const name = "じゃけえ";
// const age = 28;
// //　私の名前はじゃけえです。年齢は28歳です・

// const message1 = "私の名前は" + name  + "です。" + "年齢は" + age +"です。";
// console.log(message1);

// // template文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// アロー関数
// ()は省略もできる
// {}も省略できる
const func2 = (str) => str;

console.log(func2("func2です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 20));

// 従来の関数

// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));
