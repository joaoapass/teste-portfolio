function validacaoEmail(email){
  var exclude=/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
  var check=/@[w-]+./;
  var checkend=/.[a-zA-Z]{2,3}$/;
  if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){
    return ;
  }
  else {return true;}
    
  
  }

  function IsEmail(){
    var exclude=/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
    var check=/@[w-]+./;
    var checkend=/.[a-zA-Z]{2,3}$/;
    if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){return false;}
    else {return true;}
}