// login button event
const loginButton = document.getElementById('login-btn');
loginButton.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})

// deposit button event
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function(){
    const depositAmt = parseFloat(document.getElementById('deposit-amt').value);
    const currentDeposit = parseFloat(document.getElementById('curr-deposit').innerText);
    const totalBalance = parseFloat(document.getElementById('total-balance').innerText);
    const totalDeposit = depositAmt + currentDeposit;
    document.getElementById('curr-deposit').innerText = totalDeposit;
    document.getElementById('total-balance').innerText = totalBalance + depositAmt;
    document.getElementById('deposit-amt').value ="";
})

//withdraw button event
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function(){
    const withdrawAmt = parseFloat(document.getElementById('withdraw-amt').value);
    const currentWithdraw = parseFloat(document.getElementById('curr-withdraw').innerText);
    const totalBalance = parseFloat(document.getElementById('total-balance').innerText);
    const totalWithdraw = withdrawAmt + currentWithdraw;
    document.getElementById('curr-withdraw').innerText = totalWithdraw;
    document.getElementById('total-balance').innerText = totalBalance - withdrawAmt;
    document.getElementById('withdraw-amt').value ="";
})