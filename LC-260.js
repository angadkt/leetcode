var singleNumber = function(nums) {
    let res =[];
    let rel = nums.sort((a,b)=> a-b)
    for(let i=0; i<rel.length; i++){
        if(rel[i]!== rel[i+1]){
            res.push(rel[i])
        }else{
            i++
        }
    }
    return res
    
};