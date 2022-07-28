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



function problem10(input10){       
    if (input10 == ""){
        document.getElementById("output10").innerHTML = "";
    }else{
        let text = input10;
        const arr_num = text.split(",");

        arr_num.sort(function(x,y)
                {
                return x-y;
                });
        var uniqa = [arr_num[0]];
        var result = [];

        for(var j=1; j < arr_num.length; j++)
        {
        if(arr_num[j-1] !== arr_num[j])
        {
        uniqa.push(arr_num[j]);
        }
        }
        result.push(uniqa[1],uniqa[uniqa.length-2]);
        document.getElementById("output10").innerHTML = result.join(',');

        
    }
}

function amountTocoins(amount, coins) 
{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        left = (amount - coins[0]);
        return [coins[0]].concat( amountTocoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return amountTocoins(amount, coins);
        }
    }
} 

function problem11(input11){       
    if (input11 == ""){
        document.getElementById("output11").innerHTML = "";
    }else{        
        const input_array = input11.split(":");
        const coins = input_array[1].split(",").map(function(item) {
            return parseInt(item, 10);
        });
        var amount = input_array[0];
             
        document.getElementById("output11").innerHTML = amountTocoins(amount, coins);
    }
}



function problem12(input12){       
    if (input12 == ""){
        document.getElementById("output12").innerHTML = "";
    }else{
        var uchars = {};
        input12.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
        
        document.getElementById("output12").innerHTML = JSON.stringify(uchars);
    }
}

function problem13(input13){       
    if (input13 == ""){
        document.getElementById("output13").innerHTML = "";
    }else{
        var text = "";
        var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
        for(var i=0; i < input13; i++ )
        {  
        text += char_list.charAt(Math.floor(Math.random() * char_list.length));
        }
        
        document.getElementById("output13").innerHTML = text;
    }
}

function problem14(input14){       
    if (input14 == ""){
        document.getElementById("output14").innerHTML = "";
    }else{
        const input_array = input14.split(" ");
        var letter_Count = 0;
        for (var position = 0; position < input_array[0].length; position++) 
        {
           if (input_array[0].charAt(position) == input_array[input_array.length-1]) 
             {
             letter_Count += 1;
             }
         }
        //  return letter_Count;
        
        document.getElementById("output14").innerHTML = letter_Count;
    }
}



function problem15(input15){       
    if (input15 == ""){
        document.getElementById("output15").innerHTML = "";
    }else{
        var arra1 = input15.split('');
        var result = '';
        var ctr = 0;
        
        for (var x = 0; x < arra1.length; x++) {
            ctr = 0;
        
            for (var y = 0; y < arra1.length; y++) 
            {
            if (arra1[x] === arra1[y]) {
                ctr+= 1;
            }
            }
        
            if (ctr < 2) {
            result = arra1[x];
            break;
            }
        }
        // return result;
        
        document.getElementById("output15").innerHTML = result;
    }
}