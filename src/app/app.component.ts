import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  //Data Type Declaration
  name: string;

  mytuple: [string, number];
  constructor() {
    this.Stringopr();
    this.Arropr();
    this.Tup();
    this.Da1();
    this.express();
    this.opr(12, 13);
    this.Type();
    this.assignment();
    this.Biwise();
    this.looping();

    //this.add(23, 24);
  }
  //String Operations
  Stringopr() {
    var str = "selva kumar";
    var str2 = "sivakumar";

    console.log("Given String:" ,str);

    console.log(" subString Result:" + str.substring(1, 5)); //substring

    console.log(" String Length " + str.length); //string length

    var str3 = str.concat(str2.toString());
    console.log("concatnation:" + str3);

    console.log(str.toUpperCase());

    var index = str.indexOf("selva");
    console.log("indexOf found String :" + index);

    var index2 = str.lastIndexOf("kumar");
    console.log("LastindexOf found String :" + index2);

    var sliced = str.slice(4, -2);
    console.log("sliced" + sliced);

    console.log("str.charAt(0) is:" + str.charAt(0)); //charecter at

    console.log("str.charAt(0) is:" + str.charCodeAt(0));

    let str1 = new String("selva");
    index = str1.localeCompare("selva");
    console.log("localeCompare first :" + index);

    var res = str.replace("selva", "msd");
    console.log("string replace:" + res);

    var n = str.search("kumar");
    console.log("string search:" + n);

    var splitted = str.split(" k", 3);
    console.log("string split:" + splitted);

    console.log("substring:" + str.substr(-2, 2));

    console.log("locallowercase:" + str.toLocaleLowerCase());

    console.log("upperrcase:" + str.toLocaleUpperCase());

    console.log("lowercase:" + str.toLowerCase());

    console.log("convert string:" + str.toString());

    console.log("value string:" + str2.valueOf());
  }
  //array operations
  Arropr() {
    var arr1 = ["a", "b", "c"];
    var arr2 = ["1", "2", "3"];

    var arr3 = arr1.concat(arr2);
    console.log("Array operations");
    console.log("alphaNumeric : " + arr3);

    function isBigEnough(element, index, array) {
      return element >= 12;
    }

    var passed = [12, 5, 8, 130, 44].every(isBigEnough);
    console.log("every type : " + passed);

    var passed2 = [12, 5, 8, 130, 44].filter(isBigEnough);
    console.log("filter Value : " + passed2);

    var num = [7, 8, 9, 10, 11];
    num.forEach(function(value) {
      console.log("foreach result:" + value);

      var index = arr1.indexOf("b");
      console.log("index is : " + index);

      var arr = new Array("vicky", "roshan", "selva", "kalai");
      var str = arr.join();
      console.log("str : " + str);
      var str = arr.join(", ");
      console.log("str : " + str);
      var str = arr.join(" + ");
      console.log("str : " + str);

      var index = [12, 5, 8, 130, 44].lastIndexOf(130);
      console.log("index is : " + index);

      var numbers = [1, 16, 25];
      var roots = numbers.map(Math.sqrt);
      console.log("roots is : " + roots);

      var element = numbers.pop();
      console.log("pop element is : " + element);

      var length = numbers.push(10);
      console.log("new numbers is : " + numbers);

      var total = [0, 1, 2, 3].reduce(function(a, b) {
        return a + b;
      });
      console.log("total is : " + total);

      var total = [0, 1, 2, 3, 4].reduceRight(function(a, b) {
        return a + b;
      });
      console.log("total is : " + total);

      var numbers2 = [0, 1, 2, 3].reverse();
      console.log("Reversed array is : " + numbers2);

      var numbers3 = [1, 2, 3, 4].shift();
      console.log("Shifted value is : " + numbers3);

      var arr = ["orange", "mango", "banana", "sugar", "tea"];
      console.log("slice : " + arr.slice(1, 2));

      var retval = [12, 5, 8, 1, 4].some(isBigEnough);
      console.log("some Returned value is : " + retval);

      var sorted = arr.sort();
      console.log("Returned string is : " + sorted);

      var removed = arr.splice(2, 3);
      console.log("After removing 1: " + arr);
      console.log("removed is: " + removed);

      var str8 = arr.toString();
      console.log("Returned string is : " + str8);

      var length = arr.unshift("water");
      console.log("unshifted array is : " + arr);
      console.log("Length of the array is : " + length);
    });
  }
  Da1() {
    //date functions
    let date: Date = new Date();
    console.log("Date = " + date);
    //date.setDate(13);
    date.setMonth(10);
    date.setFullYear(2020);
    date.setHours(13);
    date.setMinutes(13);
    date.setSeconds(13);
    console.log("Year = " + date.getFullYear()); //get date
    console.log("Date = " + date.getDate());
    console.log("Month = " + date.getMonth());
    console.log("Day = " + date.getDay());
    console.log("Hours = " + date.getHours());
    console.log("Minutes = " + date.getMinutes());
    console.log("Seconds = " + date.getSeconds());
    console.log("add date", date.getDate() + 2);
    console.log("substract date", date.getDate() - 2);
  }
  express() {
    //if condition
    let x: number = 300,
      y = 400;

    if (x > y) {
      console.log("x is greater than y.");
    } else {
      console.log("x is less than or equal to y."); //This will be executed
    }

    //switch
    let a = 20,
      b = 5;

    switch (a - b) {
      case 0:
        console.log("Result: 0");
        break;
      case 15:
        console.log("Result: 15");
        break;
      case 10:
        console.log("Result: 10");
        break;
    }
    //math functions
    var m = Math.PI;
    console.log("math operations");
    console.log(" PI Result:" + m);
    var m1 = Math.round(4.7);
    console.log("round Result:" + m1);
    var m2 = Math.pow(8, 2);
    console.log(" power Result:" + m2);
    var m3 = Math.sqrt(81);
    console.log(" sqrt Result:" + m3);
    var m4 = Math.abs(-7.4);
    console.log(" absolute Result:" + m4);
    var m5 = Math.ceil(4.4);
    console.log(" ceil Result:" + m5);
    var m6 = Math.floor(4.4);
    console.log("floor Result:" + m6);
    var m7 = Math.sin((90 * Math.PI) / 180);
    console.log("sin Result:" + m7);
    var m8 = Math.cos((0 * Math.PI) / 180);
    console.log("cos Result:" + m8);
    var m9 = Math.min(10, 20, 30, 40, -8, 500);
    console.log("min Result:" + m9);
    var m10 = Math.max(10, 20, 30, 40, -8, 500);
    console.log("max Result:" + m10);
    var m11 = Math.random();
    console.log("random Result:" + m11);
  }
  Tup() {
    var mytuple = [10, "Hello"]; //create a  tuple
    console.log(mytuple[0]);
    console.log(mytuple[1]);
    mytuple.push(12);
    mytuple.pop(); //Tuple operations
    console.log("Items after push " + mytuple.length);

    let code: number | string | boolean;
    var arr = new Array("orange", "mango", "banana", "sugar");
    var length = arr.unshift("water");
    console.log(arr);
    // OK
    code = "ABC";
    code = 123;
    code = true; // OK
    console.log(code);
  }
  opr(o, p) {
    //Arthmetic operations
    var z = o + p;
    console.log(z);
    var z1 = o - p;
    console.log(z1);
    var z2 = o * p;
    console.log(z2);
    var z3 = o / p;
    console.log(z3);
    var z4 = o % p;
    console.log(z4);
    let z5 = 55;
    z5++;
    console.log(z5);
    let z6 = 55;
    z6--;
    console.log(z6);

    //Relational operator
    let r1 = 10;
    let r2 = 20;
    console.log("Relational operators");
    console.log("result:" + (r1 == r2)); //Is equal to
    console.log(r1 == 10); //true
    console.log(10 == 10);

    console.log(r1 === r2); //Identical(equal and of the same type
    console.log(r1 === r2); //true
    console.log(10 === 10);

    console.log(r1 != r2); //not equal to
    console.log(r1 != 10); //false
    console.log(10 != 10);

    console.log(r1 !== r2); //Not Identical
    console.log(r1 !== r2); //false
    console.log(10 !== 10);

    console.log(r1 > r2); //Greater than
    console.log(r1 > 30); //false
    console.log(20 > 20);

    console.log(r1 >= r2); //Greater than or equal
    console.log(r1 >= 30); //false
    console.log(20 >= 20);

    console.log(r1 < r2); //less than
    console.log(r1 < 30); //false
    console.log(20 < 20);

    console.log(r1 <= r2); //less than
    console.log(r1 <= 30); //false
    console.log(20 <= 20);
  }
  //Logical operators
  Logical() {
    let l1 = false;
    let l2 = true;
    console.log("logical operators");
    console.log(l1 && l2); //Logical And
    console.log(l2 && true); //true
    console.log(l2 && 10); //10 which is also 'true'
    console.log(l1 && "10");

    console.log(l1 || l2); //Logical Or
    console.log(l2 || true); //true
    console.log(l2 || 10); //10 which is also 'true'
    console.log(l1 || "10");
    console.log(!true); //false
    console.log(!false); //Logical Not
    console.log(!l1); //false
    console.log(!l2); //false
    console.log(!null);
  }
  //Bitwise operator
  Biwise() {
    let s1 = 2;
    let s2 = 3;
    console.log("Bitwise operators");
    let s3 = s1 & s2; //Bitwise AND
    console.log(s3);
    let s4 = s1 | s2; //Bitwise OR
    console.log(s4);
    let s5 = s1 ^ s2; //Bitwise XOR
    console.log(s5);
    let s6 = ~s1; //Bitwise Not
    console.log(s6);
    let s7 = s1 >> s2; //Right Shift
    console.log(s7);
    let s8 = s1 << s2; //Left Shift
    console.log(s8);
    let s9 = s1 >>> s2; //Right Shift with zero
    console.log(s9);
  }
  assignment() {
    let t1 = 10;
    let t2 = 5;
    console.log("Assignment operators");
    console.log("t1=t2:" + t1); //= operators
    let t3 = (t1 += t2); // add and assign
    console.log(t3);
    let t4 = (t1 -= t2); //subtract and assign
    console.log(t4);
    let t5 = (t1 *= t2); //multiply and assign
    console.log(t5);
    let t6 = (t1 /= t2); //divide and assign
    console.log(t6);
    let t7 = (t1 %= t2); //modules and assign
    console.log(t7);
  }
  Type() {
    let g = 16;
    let result = g > 0 ? "True" : "False";
    console.log(result);

    ///concatenation Operator
    let message = "Welcome to " + "Easy Design Systems";
    console.log("Result of Concat:" + message);

    //Type operator
    let EDS = { make: "Honda", model: "CLIQ", year: 20 };
    console.log("make" in EDS); //in operator

    let EDS2 = {
      Company1: "Honda",
      Company2: "Hero",
      Company3: "Royal Enfield"
    };
    delete EDS2.Company1; //delete operator
    console.log(EDS2);
    console.log(typeof message);

    let Eds3 = [1, 2, 3];

    console.log(Eds3 instanceof Array); // true
    console.log(Eds3 instanceof String);
  }
  looping() {
    var num: number = 5;
    var i: number;
    var factorial = 1;

    for (i = num; i >= 1; i--) {
      //for loop
      factorial *= i;
    }
    console.log(factorial);
    var k: any;
    var n: any = "a b c ";

    for (k in n) {
      // for loop using in
      console.log(k);

      let i: number = 2; //do while statement
      do {
        console.log("Block statement execution no." + i);
        i++;
      } while (i < 4);
    }
  }
}
