

function fibonacci(num){
    if(num==1){
        return 1
    }else if(num==0){
        return 0
    }else{
        return fibonacci(num-1)+fibonacci(num-2)
    }
}

module.exports=fibonacci