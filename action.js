function display(num){  
    form.value+=num
}
function back(){
    form.value=form.value.slice(0,-1)
}
function clear(){
    form.value=""
}
function equal(){
    if(form.value){
        form.value=eval(form.value)

    }
    else{
        clear()
    }
}
