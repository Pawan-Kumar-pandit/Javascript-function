let dateString=document.getElementById("zindagi");
let button=document.getElementById("myButton");

function formateDate(dataString)
{
    console.log("QUESTION : -1 :->  . Dates in Javascript:");
    const dateParts=dataString.split('/'); // split the date string into day ,month ,and year parts
    const dayIndex=new Date(`${dateParts[2]}-${dateParts[0]}-${[dateParts[1]]}`).getDay();
    const day =getDayName(dayIndex);
    const monthIndex=parseInt(dateParts[0],10)-1
    const month=getMonthName(monthIndex);
    console.log(`Greetings, Today is ${day} and it's ${dateParts[1]} ${month}`);

}
function getDayName(dayIndex){
    switch(dayIndex){
        case 0: 
             return 'Sunday';
        case 1:
             return  'Monday';
        case 2:
            return 'Tuesday';
        case 3: 
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        default:
            return '';
    }
}

function getMonthName(monthIndex){
    const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
    return months[monthIndex];
}


button.addEventListener("click",function () {

    formateDate(dateString.value);

});