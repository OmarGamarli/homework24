// 1) 
//выведите в консоли каждый элемент из строки ниже с помощью for
let str = 'My name is Samuil';
for(const x of str){
    console.log(x);
}

// 2)
//выведите в консоли каждый элемент из массива ниже с помощью for
let arr = [1, 2, 3, 4, 5];
for(const x of arr){
    console.log(x);
}


// 3)
//создайте набор с помощью new Set()
const letter=new Set()

// 4)
//добавьте в созданный ранее набор, элементы 'a', 'b', 'c' с помощью add()
letter.add("a")
letter.add("b")
letter.add("c")

// 5)
//выведите в консоли слово 'Element' для каждого элемента из массива с помощью forEach()
let arr1 = [1, 2, 3, 4, 5];
let text=""
arr1.forEach(function(value){
text+=value 
})
// 6)
//выведите все значения из набора
let fruits1 = new Set(['apple', 'banana', 'mango']);
console.log(fruits1.values());

// 7)
//выведите все ключи из набора
let fruits2 = new Set(['apple', 'banana', 'mango']);
console.log(fruits2.keys());

// 8)
//выведите все ключи из набора
let fruits3 = new Set(['apple', 'banana', 'mango']);

// 9)
//создайте обьект с помощью new Map()
const fruit=new Map()
    
// 10)
//добавьте в созданный ранее обьект, с помощью set()
let apple = 500;
let banana = 300;
let orange = 100;

fruit.set(apple);
fruit.set(banana);
fruit.set(orange);

// 11)
//выведите в консоли значение apple с помощью get() из обьекта ниже
let fruits4 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);
console.log(fruits4.get('apple')
);
// 12)
//выведите в консоли количество элементов в мапе ниже
let fruits5 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);
console.log(fruits5.size);

// 13)
//удалите элемент 'apple' из мапа ниже
let fruits6 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);
fruits6.delete('apple')

// 14)
//очистите мап ниже
let fruits7 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);
fruits7.clear()

// 15)
//проверьте находится ли 'apple' в мапе ниже
let fruits8 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);
fruits8.has('apple')

// 16)
//выведите все значения из обьекта ниже
let fruits9 = new Set(['apple', 'banana', 'mango']);
console.log(fruits9.values());

// 17)
//выведите все ключи из обьекта ниже
let fruits10 = new Set(['apple', 'banana', 'mango']);
console.log(fruits10.keys());

// 18)
//выведите все ключи/значения из обьекта ниже
let fruits = new Set(['apple', 'banana', 'mango']);

console.log(fruits.entries());