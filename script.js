// DOM Selection
var dipositeFild=document.querySelector(".dipositeFiled");
var dipositeBtn=document.querySelector("#btni");
var widthdrowFild=document.querySelector(".withdroInput");
var widthdrowBtn=document.querySelector("#btnii");
var balance=document.querySelector(".balance");
var toest=document.querySelector(".toest");
var text=document.querySelector(".text");


//diposite functiton
dipositeBtn.addEventListener("click",()=>{
    //check if the deposite file is emtey or not
    if(dipositeFild.value == ''){
         //if emtey the give akert
        alert("Enter your Diposite Amount");
    }else{
        calculated(dipositeFild,"+");
        toestFunction("Your Deposite was Successfull");
    }
});

//withdoral functiobn
widthdrowBtn.addEventListener("click",()=>{
    // check if the widthdroal filed is emteyh or not
    if(widthdrowFild.value == ''){
        //if emtey than give alert
        alert("Enter your Withdroal Amount");
    }else{
        calculated(widthdrowFild,"-");
        toestFunction("Your Withdrow was Successfull ");
    }
  });

// calculated function
function calculated(intigator,oparat){

//if not emtey than excute the code
var mainBl=parseFloat(balance.textContent);
var dipo=parseFloat(intigator.value);
var final=eval(mainBl+oparat+dipo);
balance.textContent=final;
}

//notification functition
function toestFunction(messege){
     //give notification
     toest.style.display="block";
     text.textContent=messege;

     //remove notiiication
     setTimeout(()=>{
     toest.style.display="none";
     },5000)
}


