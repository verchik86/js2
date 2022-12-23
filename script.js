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