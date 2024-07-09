const accountId=1234
let account_email="vishujain3082@gmail.com"
var account_password="vishu"
account_city="Indore"//Not a good practise 
let account_state

//lets try to change a constant 
// accountId=2 this is not allowed const cannot be changed
console.log(accountId)
account_email="123ghy"
account_password="goyam"
account_city="chennai"
console.log(account_email)
console.log(account_password)
console.log(account_password)
console.log("New way")
    console.table([accountId,account_email,account_password,account_city,account_state])
console.log(account_state)
/*
Prefer not to use var because of issue in block scope and functional scope*/
//if no value is assigned to a variable in js then it considers it as undefined and console.log gives "Undefined" message as output
//Const must be initialized avoiding that will be considerd as syntax error