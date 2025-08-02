
const login=(event)=>{
    event.preventDefault()
    var username=document.getElementById('username').value
    var password=document.getElementById('password').value
if(username==='dhusi' && password==='2237'){
    window.location.href='home.html'

}
else{
    alert('invalid Password and username')
}
}