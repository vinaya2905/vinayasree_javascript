const name=document.getElementById('name')
const password=document.getElementById('password')
const form=document.getElementById('form')
const errorElement =document.getElementById('error')

form.addEventListener('submit',(e)=> {
    let messages=[]
    if(name.value === ''||name.value == null){
        messages.push('Name is required')
    }
    if(messages.length>0){
        e.preventDefault()
        errorElement.innerText =messages.join(', ')
    }
    if(password.value.length <= 6){
        messages.push('Password must ne longer than 6')
    }
    if(password.value.length >= 20){
        messagespush('Password must be less than ')
    }
    if(password.value === 'password'){
        messages.push('Password cannot be password')
    }
})