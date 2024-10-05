var categorizeBox = function(length, width, height, mass) {
    let isBulky = (length >= 10**4 || width >= 10**4 || height >= 10**4 || mass >= 10**4 || (width*height*length) >= 10**9)
    let isHeavy = (mass >= 100);

    if(isBulky && isHeavy){
        return "Both"
    }else if(isBulky){
        return "Bulky"
    }else if(isHeavy){
        return "Heavy"
    }else{
        return "Neither"
    }

};