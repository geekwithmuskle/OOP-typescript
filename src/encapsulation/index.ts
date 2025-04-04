class User {
    private username: string;
    private password: string;

    constructor(username: string, password: string){
        this.username = username;
        this.password = password;
    }

    // Method to authenticate user
    authenticate(enteredPassword: string): boolean{
        return enteredPassword === this.password;
    }

    // Method to change password
    changePassword(newPassword: string): void{
        this.password = newPassword;
    }

}

// Create a user
const user = new User("Ali Mata", "abcd1234");

console.log(user.authenticate("123456"));
console.log(user.authenticate("abcd1234"));

user.changePassword("ABCD1234");

console.log(user.authenticate("abcdefgh"));
console.log(user.authenticate("ABCD1234"));