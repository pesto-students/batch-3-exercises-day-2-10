function savingsAccount(accountNumber, email, firstName, lastName) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (accountNumber.length !== 6)
        return "Account Number must be a 6-digit number";

    if (re.test(String(email).toLowerCase()) == false) return "Invalid e-mail";

    if (firstName.length < 3 || firstName.length > 20)
        return "First name must be between 3 and 20 characters long";

    if (!/^[a-z]+$/i.test(lastName))
        return "Last name must contain english alphabets only";

    var details = {
        _accountNumber: accountNumber,
        _email: email,
        _firstName: firstName,
        _lastName: lastName,
        products: []
    };
    return details;
}

export { savingsAccount };
