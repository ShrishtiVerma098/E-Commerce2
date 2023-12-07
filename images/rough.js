let age = prompt("Enter your age : ")
age=Number.parseInt(age)
if(age<18){
    throw new Error("You are not eligible")
}

if(age>18){
    alert("eligible")
}