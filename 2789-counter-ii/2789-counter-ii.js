/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let presentCount = init
    return{
        increment : function(){
            return presentCount = presentCount+1
        },
        decrement : function(){
            return presentCount = presentCount-1
        },
        reset : function(){
            return presentCount = init
        }
    }

};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */