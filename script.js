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

        //if not emtey than excute the code
        var mainBl=parseFloat(balance.textContent);
        var dipo=parseFloat(dipositeFild.value);
        var final=mainBl+dipo;;
        balance.textContent=final;

        // give notification
        toest.style.display="block";
        text.textContent="Your Deposite was Successfull ";

        //remove notification
        setTimeout(()=>{
            toest.style.display="none";
        },2500)
    }

  

});

//withdoral functiobn
widthdrowBtn.addEventListener("click",()=>{

    // check if the widthdroal filed is emteyh or not
    if(widthdrowFild.value == ''){

        //if emtey than give alert
        alert("Enter your Withdroal Amount");
    }else{

        //if all ok than excitute the code
        var mainBl=parseFloat(balance.textContent);
        var withdro=parseFloat(widthdrowFild.value);
        var final=mainBl- withdro;;
        balance.textContent=final;
        
        //give notification
        toest.style.display="block";
        text.textContent="Your Withdrow was Successfull ";

        //remove notiiication
        setTimeout(()=>{
        toest.style.display="none";
        },2500)
    }

    
  });