let array = [5, 25, 89, 120, 36];

array.push('javascript', 'pyton')
console.log(array);

array.unshift('html', 'css')

console.log(array);

array.shift()
array.pop()

console.log(array);

// 2

let array2 = ['ფორთოხალი', 'ბანანი', 'მსხალი']

console.log(array2.length);

array2.push('ვაშლი', 'ანანასი')

console.log(array2);

array2.unshift('საზამთრო')

console.log(array2);

console.log(array2.length);

array2.splice(3,0, 'მანგო');

console.log(array2);

array2.pop()
array2.shift()

console.log(array2);

// 3
let array3 = [12, 25, 3, 6, 8, 14, 7, 23];

console.log();

let array4 = array3.map (ab => ab / 3) 
console.log(array4);

// 4

let array5 = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

console.log();

let array6 = array5.filter (cg => typeof numbers === 'number')

console.log(array6);


// 5

let languages = ['html', 'css', 'javascript', 'python', 'php'];

console.log();

let lang = languages.filter(dc => dc.length > 3)

console.log(lang);

// 7

let item = [12, ‘google’, 32, null, ‘yahoo’, 25];

let item2 = item.map(item3 => {
    if (typeof item3 === number) {
        return item3*item3
    }
})


// 8
let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

let words1 = words.filter(words3 => words3.includes('m') || words3.includes('m');
console.log(words1);

