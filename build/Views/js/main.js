function login(username,password){
    if(username == '' || password.length<8)
        return alert('Username field cannot be empty, Passsword should be of atleast 8 charaacters');
    var loginRequest = new XMLHttpRequest()
    var params = '?username='+username+'&password='+password ;
    loginRequest.open('POST','https://udaantask.herokuapp.com/user/login'+params)
    loginRequest.setRequestHeader("Content-type", "application/json");
    loginRequest.setRequestHeader("Authorization", "Basic a2Vyb==");
    loginRequest.onerror = function(e){
        alert('Internal Error : ' + e +'\n Tip: Try restarting the node app');
    }
    try{
        loginRequest.onload = function(){
            var res = JSON.parse(loginRequest.responseText);
            console.log(res);
            if(res.success == true){
                // window.location.href('/home.html')
                window.location.href='./home.html';
            }else{
                alert('Incorrect Credentials');
            }
        }
        loginRequest.send();
    } catch(e){
        alert('Internal Error : ' + e);
    }
}

function signup(username, password, name, phone ,repassword){
    if(username=='' || password =='' || name =='' || phone==''||repassword=='') return alert('All fields are mandatory');
    else if(password.length <8) return alert('Password cannot be of less than 8 characters');
    else if(password != repassword) return alert('Password should be same in both the fields') ;
    var params='?username='+username+'&password='+password+'&name='+name+'&phone='+phone;
    const url = 'https://udaantask.herokuapp.com/user/register'
    var registerRequest = new XMLHttpRequest();
    registerRequest.open('POST',url+params)
    registerRequest.onerror = function(e){
        alert('Internal Error : ' + e +'\n Tip: Try restarting the node app');
    }
    try{
        registerRequest.onload = function(){
            var res = JSON.parse(registerRequest.responseText);
            if(res.success == true){
                window.location.href='./login.html';
            }else{
                alert('User Already exisits');
            }
        }
        registerRequest.send();
    } catch(e){
        alert('Internal Error : ' + e);
    }
}

    

