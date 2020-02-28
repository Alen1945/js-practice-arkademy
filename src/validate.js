const vUsername=(name)=>{
    let reg=/^[\w]+$/
    if(reg.test(name)){
        return true
    }else{
        return false
    }
}

const vPassword=(pass)=>{
    let reg=/.{8,}/
    if(reg.test(pass)){
        return true
    }else{
        return false
    }
}

module.exports={vUsername,vPassword}