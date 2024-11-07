// exercise 1
// let a = +prompt("Enter first number: ");
// let b = +prompt("Enter second number: ");
// let c = +prompt("Enter third number: ");
// let largest = 0;
// let smallest = 100;

// if(a > largest){
//     largest = a;
// }
// if(b > largest){
//     largest = b;
// }
// if(c > largest){
//     largest = c;
// }
// if(a < smallest){
//     smallest = a;
// }
// if(b < smallest){
//     smallest = b;
// }
// if(c < smallest){
//     smallest = c;
// }

// alert(`The nearest number to 100 is ${largest}, the farthest ${smallest}`)




// exercise 2
// let s = prompt("enter string:");
// let str = s.split(" ");
// let str_sorted = [];

// for(let i = 0; i < str.length; i++){
//     let temp = str[i].split("").sort();

//     str_sorted.push(temp.join(""));
// }

// alert(str_sorted.join(" "));




// exercise 3
// let str = prompt("enter string:");
// str = str.split("");
// let repeatedChar = "";

// for(let i = 0; i < str.length; i++){
//     let count = 0;
//     for(let j = 0; j < str.length; j++){
//         if(str[i] == str[j]){
//             count++;
//         }
//     }
//     if (count === 1) {
//         alert(`non-repeating char is: ${str[i]}`);
//     }
// }





// exercise 4
// let s = prompt("enter string:");
// let str = "";

// for(let i = 0; i < s.length; i++) {
//     str += String.fromCharCode(s.charCodeAt(i) + 1);
// }

// alert(str);




//exercise 5
// let a = prompt("enter string:");
// a = a.split(" ");

// let longest = a[0].length > a[1].length ? a[0] : a[1];
// longest = longest.length > a[2].length ? longest : a[2];

// let shortest = a[0].length < a[1].length ? a[0] : a[1];
// shorteset = shortest.length < a[2].length ? shortest : a[2];

// alert(`The longest is: ${longest}, the shortest is ${shortest}`);




//exercise 6
let p = document.querySelector("p");
let str = p.textContent.split(" ");
let newStr = "";

for(let word of str){
    if (word.length > 7) {
        newStr += `<span style="background-color: blue;">${word}</span> `;
    } else if (word.length < 3) {
        newStr += `<span style="font-weight: bold;">${word}</span> `;
    } else {
        newStr += `${word} `;
    }
}
p.innerHTML = newStr.trim();




//exercise 7
let div_ex7 = document.getElementById("ex7");
let text_ex7 = div_ex7.textContent;
let newText_ex7 = "";

for (let char of text_ex7) {
    char = char == "?" ? "*" : char;
    char = char == "!" ? "@" : char;
    newText_ex7 += char;
}
div_ex7.textContent = newText_ex7;



//exercise 8
let div_ex8 = document.getElementById("ex8");
let text_ex8 = div_ex8.textContent;
let newText_ex8 = "";

for (char of text_ex8) {
    if (char == "?" || char == "!" || char == ".") {
        newText_ex8 += char;
        newText_ex8 += "<br>";
    } else {
        newText_ex8 += char;
    }
}
div_ex8.innerHTML = newText_ex8;




//exercise 9
// let div_ex9 = document.getElementById("ex9");
// let text_ex9 = div_ex9.textContent.split(" ");
// let numberOfWords = 0;

// for (word of text_ex9) {
//     numberOfWords++;
// }
// alert(numberOfWords);



//exercise 10
let div_ex10 = document.getElementById("ex10");
let text_ex10 = div_ex10.textContent.split(" ");
let newText_ex10 = "";

for (word of text_ex10) {
    if (word[0].toLowerCase() === "a") {
        newText_ex10 += `<i>${word} </i>`;
    } else if (word[word.length-1].toLowerCase() === "y"){
        newText_ex10 += `<u>${word} </u>`
    } else {
        newText_ex10 += word + " ";
    }
}
newText_ex10 = newText_ex10.trim();
div_ex10.innerHTML = newText_ex10;


//exercise 11
function sphere() {
    let radius = document.getElementById("ex11Radius").value;

    document.getElementById("ex11Result").textContent = 4 / 3 * Math.PI * radius * radius * radius;
}

//exercise 12
function cylinder() {
    let radius = document.getElementById("ex12Radius").value;
    let height = document.getElementById("ex12Height").value;

    document.getElementById("ex12Result").textContent = Math.PI * radius * radius * height;
}

//exercise 13
function cone() {
    let radius = document.getElementById("ex13Radius").value;
    let height = document.getElementById("ex13Height").value;

    document.getElementById("ex13Result").textContent = 1 / 3 * Math.PI * radius * radius * height;
}

//exercise 14
function prism() {
    let a = document.getElementById("ex14A").value;
    let b = document.getElementById("ex14B").value;
    let height = document.getElementById("ex14Height").value;

    document.getElementById("ex14Result").textContent = a * b * height;
}

//exercise 15
function triangle() {
    let base = document.getElementById("ex15Base").value;
    let height = document.getElementById("ex15Height").value;

    document.getElementById("ex15Result").textContent = 1 / 2 * base * height;
}



//exercise 16
document.getElementById("openbtn").addEventListener("click", function(){
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main_sidebar").style.marginLeft = "250px";
});
document.getElementById("closebtn").addEventListener("click", function(){
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("main_sidebar").style.marginLeft = "0px";
});

//exercise 17
