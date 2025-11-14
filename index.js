function signup(username)
{
    let users = ["Niveda","Madhu","Anu","Neelu"];
    if(users.includes(username))
        return "User Already Registered, Please Login.";
    else
    {
        users.push(username);
        return "Signup Successfull, Please Login.";
    }
}
console.log(signup("Niveda"));
console.log(signup("Greesh"));

//login function in login branch
function login(username,password)
{
    let users = ["Raju","Varma","David"];
    if(!users.includes(username))
        return "User Not Found, Please Signup."
    if(password === "Emp@123")
        return "Login Successfull..."
    else
        return "Wrong Password..."
}
console.log(login("Raju","Emp@123"));