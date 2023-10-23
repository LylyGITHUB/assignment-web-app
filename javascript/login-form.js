var txtUsername = document.getElementById('username');
var txtPassword = document.getElementById('password');
var btnSubmit = document.getElementById('submit');
var txtUsernameError = document.getElementById('errorUsername');
var txtPasswordError = document.getElementById('errorPassword');
var txtToast = document.querySelector('.toast-body');
const checkUsernameError = () =>{
    if(txtUsername.value.length < 5 || txtUsername.value.length > 15 ){
        txtUsernameError.innerHTML = 'Please input (5-15) Characters only .';
    }else{
        txtUsernameError.innerHTML = ''
    }
}
const checkPasswordError = () =>{
    if(txtPassword.value.length < 5 || txtPassword.value.length > 10){
        txtPasswordError.innerHTML = 'Please input your password betwen (5-10).';
    }else{
        txtPasswordError.innerHTML = ''
    }
}
const login = () => {
    const toastLiveExample = document.getElementById('liveToast');
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    if(txtUsername.value !== '' || null || txtPassword.value !== '' || null){
        if(txtUsername.value == 'admin' || txtPassword.value == 'admin'){
            toastBootstrap.show()
            txtToast.innerHTML ='Login Success'
            txtToast.style.backgroundColor = 'green'
            txtToast.style.borderRadius = '10px'
            txtToast.style.opacity = '0.7'
            window.location.href = "/html/sophea.html";
        }else{
            toastBootstrap.show()
            txtToast.innerHTML ='Login Failed'
            txtToast.style.backgroundColor = 'gray'
            txtToast.style.opacity = '0.7'
            txtToast.style.borderRadius = '10px'
        }
    }else{
        toastBootstrap.show()
        txtToast.innerHTML ='Please Field your information'
        txtToast.style.backgroundColor = 'red'
        txtToast.style.opacity = '0.7'
        txtToast.style.borderRadius = '10px'
    }
}
const onClick = (event) =>{
    event.preventDefault();
    login();
    setTimeout(()=>{
        
    },5000)
}
const onKeyEnter = (event) =>{
    if(event.keyCode === 13){
        login()
        setTimeout(()=>{
            txtUsername.value = ''
            txtPassword.value = ''
        },5000)
    }
}