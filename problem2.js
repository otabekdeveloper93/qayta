let obj = {
    login: "forever",
    pass: '123forever'
}

if(obj.login.trim().length < 3 &&obj.pass.trim().length < 8){
    console.log(`login kamida 8 belgidan iborat bo'lishi kerak`);
    console.log(`parol kamida 8 belgidan iborat bo'lishi kerak`);
}else if(obj.pass.trim().length < 8){
    console.log(`parol kamida 8 belgidan iborat bo'lishi kerak`);
}else if(obj.login.trim().length < 3){
    console.log(`login kamida 8 belgidan iborat bo'lishi kerak`);
}else{
    console.log(`siz muaffaqqiyatli ro'yxatdan o'tdingiz {login: ${obj.login}, pass:${obj.pass}}`);
}