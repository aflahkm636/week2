function first () {
    function second(){
        function third(){
            console.log("third");
            
        }
       
        console.log("second");
        third() 
    }
    
    console.log("first");
    second()
}
first()
// when we execute the global execution context is created and indside it we call fuction first 
//  the execution context for first() is created  where we  log "first" and then call second function
// the execution context for second  is created where it logs second and call third fuction 
// the  execution context for third is created and its log third when it completes execution it's execution context is popped out of call stack 
// after the execution of second function it is popped out from the call stack 
// then the  first function completes its execution and it is pooped out from the call stack and the call stack become empty