function problem1(input1) {
    if (input1 == ""){
        document.getElementById("output1").innerHTML = "";
    }else{

        let rev = 0;
        let num = input1;
        let lastDigit;

        while(num != 0){
            lastDigit = num % 10;
            rev = rev * 10 + lastDigit;
            num = Math.floor(num/10);
        }
        document.getElementById("output1").innerHTML = rev;
    }
}

function problem2(input2) {
    var re = /[\W_]/g;
    var lowRegStr = input2.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    
    if (input2 == ""){
        document.getElementById("output2").innerHTML = "";
    } else if (reverseStr === lowRegStr){
        document.getElementById("output2").innerHTML = "PALINDROME";
    } else {
        document.getElementById("output2").innerHTML = "NOT PALINDROME";
    }
}

function problem3(input3) {
    if (input3 == ""){
        document.getElementById("output3").innerHTML = "";
    }else{
        var array1 = [];
        for (var x = 0, y=1; x < input3.length; x++,y++) 
        {
        array1[x]=input3.substring(x, y);
            }
        var combi = [];
        var temp= "";
        var slent = Math.pow(2, array1.length);

        for (var i = 0; i < slent ; i++)
        {
            temp= "";
            for (var j=0;j<array1.length;j++) {
                if ((i & Math.pow(2,j))){ 
                    temp += array1[j];
                }
            }
            if (temp !== "")
            {
                combi.push(temp);
            }
        }
        document.getElementById("output3").innerHTML = combi.join(", ");
    }
}

function problem4(input4){       
    if (input4 == ""){
        document.getElementById("output4").innerHTML = "";
    }else{
        document.getElementById("output4").innerHTML = input4.split('').sort().join('');
    }
}

function problem5(input5){      
    if (input5 == ""){
        document.getElementById("output5").innerHTML = "";
    }else{
        var array1 = input5.split(' ');
        var newarray1 = [];
            
        for(var x = 0; x < array1.length; x++){
            newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
        }
        document.getElementById("output5").innerHTML = newarray1.join(' ');
    }
}


function problem6(input6){  
    if (input6 == ""){
        document.getElementById("output6").innerHTML = "";
    }else{
        var array1 = input6.match(/\w[a-z]{0,}/gi);
        var result = array1[0];

        for(var x = 1 ; x < array1.length ; x++)
        {
            if(result.length < array1[x].length)
            {
            result = array1[x];
            } 
        }
        document.getElementById("output6").innerHTML = result;
    }
}


function problem7(input7){       
    if (input7 == ""){
        document.getElementById("output7").innerHTML = "";
    }else{
        var vowel_list = 'aeiouAEIOU';
        var vcount = 0;
        
        for(var x = 0; x < input7.length ; x++)
        {
          if (vowel_list.indexOf(input7[x]) !== -1)
          {
            vcount += 1;
          }
        
        }
        document.getElementById("output7").innerHTML = vcount;
    }
}


function problem8(input8){
    if (input8 == 0 || input8 == ""){
        return document.getElementById("output8").innerHTML = "";
    }else{        
        if (input8==1)
        {
            return document.getElementById("output8").innerHTML = "NOT PRIME"; 
        }
        else if(input8 == 2)
        {
            return document.getElementById("output8").innerHTML = "PRIME"; 
        }else
        {
            for(var x = 2; x < input8; x++)
            {
            if(input8 % x == 0)
            {
                return document.getElementById("output8").innerHTML = "NOT PRIME"; 
            }
            }
            return document.getElementById("output8").innerHTML = "PRIME"; 
        }
    } 
}

function problem9(input9){       
    if (input9 == ""){
        document.getElementById("output9").innerHTML = "";
    }else{
        if(input9 === 'true' || input9 === 'false'){
            input9 = true;
            return document.getElementById("output9").innerHTML = typeof(input9);
        } else if ( (input9 / 1) == input9) {
            input9 /= input9;
            return document.getElementById("output9").innerHTML = typeof(input9);
        } else {
            return document.getElementById("output9").innerHTML = (typeof(input9));
        }
    }
}

