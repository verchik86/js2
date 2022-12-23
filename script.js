//1
let minute = 59;
if (minute > 0 && minute <= 15){
    console.log('1 четверть');
}else if(minute > 15 && minute <=30){
    console.log('2 четверть');
}else if(minute > 30 && minute <=45){
    console.log('3 четверть');
}else{
    console.log('4 четверть');
}

//2
let lang = 'ru';
let arr = [];
if (lang == 'ru') {
	arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
}
if (lang == 'en') {
	arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
}
console.log(arr);

//3
let count = 0;
number = prompt('Введите число')
for(let i = 0; i < number.length; i++){
    count++;
}
if(number >= 0){
    alert('Число ' + number + ' положительное и состоит из ' + count + '-х знаков')
}else{
    count--;
    alert('Число ' + number + ' отрицательное и состоит из ' + count + '-х знаков')
}

//4

let red = 'no';
let yellow = 'no';
if(yellow === 'no' && red === 'no'){
    console.log('Горит зелёный свет, можно переходить')
}else{
    console.log('Дождитесь зелёного сигнала светофора')
};

//5
for(let i = 1; i <= 12; i++){
    console.log(i);
}

//6
for(let i = 5; i <= 13; i++){
    console.log(i);
}

//7
for(let i = 0; i <= 16; i++){
    if(i % 2 == 0){
        console.log(i);
    };
};

//8
let result3 = 0;
let arr3 = [2,5,8,3,6];
for(let i = 0; i < arr3.length; i++){
    result3 = result3 + arr3[i];
}

console.log(result3);
