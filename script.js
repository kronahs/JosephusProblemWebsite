function josephusCalculate(size){
     binary = turnToBinary(size)
     result = turnToDecimal(binary);
    return result;
}

function turnToBinary(decimal){
    binary  =Number(decimal).toString(2);
    arr = Array.from(String(binary), Number);
    arr.push(arr.shift())

    result =  arr.toString();
    return result.replace(/,/g, '');
}

function turnToDecimal(binary){
    return parseInt(binary, 2);
}


function start(){
    let soldiers = document.getElementById("inpSoldier");
    let output = document.getElementById("resultIndex");
    let secret = josephusCalculate(soldiers.value)
    displayImageList(soldiers.value,secret);

    output.innerHTML = secret;
}   

function displayImageList(n,s){
    imageLink = "./images/person.png";
    imageLink2 = "./images/person2.png"
    for(var i=0; i<n; i++) {
        if(i == s){
            $('#imageList').append('<div class="person"><p id="imgNumber">'+(i)+'</p>  <img src="'+imageLink2+'" alt="" /></div>');
        }
        else{
            $('#imageList').append('<div class="person"><p id="imgNumber">'+(i+1)+'</p>  <img src="'+imageLink+'" alt="" /></div>');
        }
    }
}