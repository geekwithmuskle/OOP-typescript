var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    // Method to authenticate user
    User.prototype.authenticate = function (enteredPassword) {
        return enteredPassword === this.password;
    };
    // Method to change password
    User.prototype.changePassword = function (newPassword) {
        this.password = newPassword;
    };
    return User;
}());
// Create a user
var user = new User("Ali Mata", "abcd1234");
console.log(user.authenticate("123456"));
console.log(user.authenticate("abcd1234"));
user.changePassword("ABCD1234");
console.log(user.authenticate("abcdefgh"));
console.log(user.authenticate("ABCD1234"));
