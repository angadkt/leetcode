
var romanToInt = function (s) {

    let res = 0;
    for(let i=0;i<s.length;i++){
        if(s[i] === "I" && s[i+1] === "V"){
            res+=4;
            i++;
        }else if(s[i] === "I" && s[i+1] === "X"){
            res+=9;
            i++;
        }else if(s[i] === "x" && s[i+1] === "L"){
            res+=40;
            i++;
        }else if(s[i] === "X" && s[i+1] === "C"){
            res+=90;
            i++;
        }else if(s[i] === "C" && s[i+1] === "D"){
            res+=400;
            i++;
        }else if(s[i] === "M" && s[i+1] === "C"){
            res+=900;
            i++;
        }else{
            switch(s[i]){
            case "I": res +=1;
            break;
            case "V": res +=5;
            break;
            case "X": res +=10;
            break;
            case "L": res +=50;
            break;
            case "C": res +=100;
            break;
            case "D": res +=500;
            break;
            case "M": res +=1000;
            break;

            }
        }
        
    }
    return res;

}
console.log(romanToInt("MCMXCIV"));

