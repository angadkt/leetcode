/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    // if(title.length <= 2) return title.toLowerCase()
    let res = title.split(" ")
    let arr = []
    // let cap =  res.map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
    // return cap.join(" ")
    for (let i=0; i<res.length; i++){
        if(res[i].length <= 2){
            arr.push(res[i].toLowerCase())
            // arr.push(" ")
        }else{
            let str =  res[i].charAt(0).toUpperCase() + res[i].slice(1).toLowerCase()
            arr.push(str)
            // arr.push(" ")
        }
    }
    return arr.join(" ")
};