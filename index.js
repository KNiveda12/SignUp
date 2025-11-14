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
