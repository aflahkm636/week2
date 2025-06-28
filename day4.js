const obj={
    name : "jhon",
    age :25,
    address: {
        city :"calicut",
        state :"kerala" 
    }

};
 const newobj1= Object.assign(obj);
 newobj1.address.city="kochi";//here  city of copied object is changed
 console.log(newobj1);//printed  the new object
 console.log(obj);// the orginal object also got modified because it is shallow copy it only copy the reference of nested object
 
 const newobj2=JSON.parse(JSON.stringify(obj))
 
 newobj2.address.state="tamil nadu"//here  state of copied object is changed
 console.log(newobj2);
 console.log(obj);//the orginal object did not get modified because it is deep copy it copies the nested object and the new reference is stored in copied newobj2 so the orginal object doesnt get modified if duplicate is modified
 
 
 
