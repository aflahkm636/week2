function division(a,b){
    try{
        if(b===0){
            throw new Error(" denominator is zero")   
        } 
        return a / b
        } catch(e){
            console.log(e.message);
            b=1

            return a/b
        }
        return a/b
    }
    console.log(division(10,0));
    
    
