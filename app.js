function validateform(){
    var name= document.my_form.name.value;
    var password=document.my_form.password.value;
    var cpassword=document.my_form.cpassword.value;

    var x= document.my_form.email.value;
    var atposition=x.indexOf("@");
    var dotposition=x.lastIndexOf(".");

    if(name==null || name==""){
        alert("Name Can't be balnk");
        return false;
    }else if(password.length<6){
        alert("Password must be of at least 5 characters long..");
        return false;
    }else if(password!=cpassword){
        alert("Password must be matched!");
        return false;
    }
    else if(atposition<1 || dotposition<atposition+2 || dotposition+2>x.length){
        alert("Please Enter a valid EMAIL ID \n @ position:"+atposition+"\n . position:"+dotposition);
    }else{
        alert("Congratulations!! Your account is created Successfully..");
    }
}