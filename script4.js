let butter=document.getElementById("myButtonA4");
butter.addEventListener("click",function(){
    let inputstring=document.getElementById("arrayInput4").value;
    let x=JSON.parse(inputstring);
    let y=x.map(str=>str.trim().toUpperCase());
    console.log(`QUESTION - 4: -> PART-1: -> ${y}`);
    let z=x.filter(str=>str.includes("special"));
    console.log(`QUESTION - 4: -> PART-2: -> ${z}`);
});