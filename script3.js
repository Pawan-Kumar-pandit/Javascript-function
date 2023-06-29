
const button3 = document.getElementById("myButtonA3");
// console.log("hellow");

function factorial(x){
    if (x===0 || x===1)
    {
        return 1; 
    }
    else
    {
        let result=1;
        for (let i=2;i<=x;i++)
        {
            result*=i;
        }
        return result;
    }

}
button3.addEventListener("click",function(){
    let x=document.getElementById("arrayInput3");
    // console.log(x);
    let m=factorial(x.value);
    console.log(`QUESTION no : 3-> Functions in Javascript: FACTORIAL OF ${x.value} is  ${m}`);

});
