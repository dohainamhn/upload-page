const controller = {}
controller.checkNull = function(data){
    for(let x in data)
    {   
        console.log(x)
        let error = document.getElementById(`${x}`)
        if(data[x].value.trim() == ""){
            error.innerHTML =`${data[x].name} is required`
            
        }
        else if(x == 'confirmPassword'){
            if(data[x].value !== data['password'].value)
            {
                error.innerHTML =`${data[x].name} does not match with password`
               
            }
            else{
                error.innerHTML =''
            }
        }
        else {
            error.innerHTML =''
        }
    }
}
controller.resetPassword = (data)=>{
    if(
        data.currentPassword !== ""&&
        data.password !==""&&
        data.confirmPassword !==""
    )
    {
        model.resetPassword(data)
    }
}
controller.logup = function(data){
    if(data.email !== "" &&
        data.firstName.value !== ""&&
        data.lastName.value !== ""&&
        data.password.value !== ""&&
        data.confirmPassword.value !==""&&
        data.confirmPassword.value === data.password.value&&
        data.isTeacher.value !==""
    ){
        model.register(data)
    }
}
controller.authenticate = function(error){
    console.log('nhay zo day');
    if(error.code == 'auth/weak-password'){
        let password = document.getElementById('password')
        password.innerHTML = 'Password must be more than 6 characters.'
        
    }
    else if(error.code == 'auth/email-already-in-use')
    {
        let email = document.getElementById('email')
        email.innerHTML = 'Email is already exist.'
        
    }
    else if(error.code == "auth/wrong-password"){
        let password = document.getElementById('password')
        password.innerHTML = 'Wrong Password'
        
    }
    else if(error.code == "auth/user-not-found"){
        let email = document.getElementById('email')
        email.innerHTML = 'Email does not exist.'
        
    }
    else if(error.code =="auth/invalid-email"){
        let email = document.getElementById('email')
        email.innerHTML = 'Email must have (.com) in the end'
        
    }
    console.log('nhay zo day2');
}
controller.login = function(data){
    if( data.email !== "" &&
        data.password.value !== ""
    ){
        model.login(data)
    }
}