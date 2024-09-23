function accountBalance (id){
    const accountBalance = document.getElementById(id).innerText;
    const accountBalanceNumber = parseFloat(accountBalance);
    return accountBalanceNumber;

};

function donationBalance (id){
    const donationBalance = document.getElementById(id).innerText;
    const donationBalanceNumber = parseFloat(donationBalance);
    return donationBalanceNumber;
};

function inputBalance (id){
    const inputBalance = document.getElementById(id).value;
    const inputBalanceNumber = parseFloat(inputBalance);
    return inputBalanceNumber;
}