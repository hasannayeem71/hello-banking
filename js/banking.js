// deposit money 

document.getElementById('deposit-btn').addEventListener('click', function() {
    let depositeAmount = document.getElementById('deposit-input').value;
    depositeAmount = parseFloat(depositeAmount);

    let neetDoposite = document.getElementById('neet-deposite').innerText;
    neetDoposite = parseFloat(neetDoposite);


    document.getElementById('neet-deposite').innerText = depositeAmount + neetDoposite;

    let totalBalance = document.getElementById('total-balance').innerText;
    totalBalance = parseFloat(totalBalance);
    totalBalance = totalBalance + depositeAmount;
    document.getElementById('total-balance').innerText = totalBalance;

    document.getElementById('deposit-input').value = '';
});

// widthdraw money 

document.getElementById('widthdraw-btn').addEventListener('click', function() {
    let widthdrawAmount = document.getElementById('widthdraw-input').value;
    widthdrawAmount = parseFloat(widthdrawAmount);

    let showWidthdrawAmount = document.getElementById('widthdraw-money').innerText;
    showWidthdrawAmount = parseFloat(showWidthdrawAmount);

    let totalBalance = document.getElementById('total-balance').innerText;
    totalBalance = parseFloat(totalBalance);
    //widthdraw showing section
    document.getElementById('widthdraw-money').innerText = showWidthdrawAmount + widthdrawAmount;
    //total balance section
    document.getElementById('total-balance').innerText = totalBalance - widthdrawAmount;
    document.getElementById('widthdraw-input').value = '';
});