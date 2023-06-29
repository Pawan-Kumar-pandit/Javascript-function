const button1=document.getElementById("myButtonA");
button1.addEventListener("click",function(){
    const arrayInput=document.getElementById("arrayInput").value;
    console.log(arrayInput);
    const arr=arrayInput.split(",").map(num=>parseInt(num.trim(),10));
    if (Array.isArray(arr) && arr.length>=3)
    {
     arr.sort((a,b)=>b-a);
     const thirdLargest=arr[2];
     console.log(" Question no : -2:  ->. Arrays and loops in Javascript:")
     console.log(`third Largest Element is : -> ${thirdLargest}`);
    //  console.log(thirdLargest);

    }
    else
    {
        console.log("invalid input . please enter at least 3 number seprated by commas.");
    }

});