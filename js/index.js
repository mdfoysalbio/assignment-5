
document.getElementById('donation-btn').addEventListener('click', function(){
    document.getElementById('all-section').classList.remove('hidden');
    document.getElementById('donation-btn').classList.add('bg-[#B4F461]');
    document.getElementById('donation-btn').classList.remove('bg-white');
    document.getElementById('history-btn').classList.add('bg-white');
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]');

    document.getElementById('history-section').classList.add('hidden');

    

});





document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('all-section').classList.add('hidden');
    document.getElementById('donation-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('donation-btn').classList.add('bg-white');
    document.getElementById('history-btn').classList.remove('bg-white');
    document.getElementById('history-btn').classList.add('bg-[#B4F461]');

    document.getElementById('history-section').classList.remove('hidden');

    

});



// all section js start here 

document.getElementById('donate-noakhali').addEventListener('click', function(event){
    event.preventDefault();

   

    const noakhaliDonationInput = inputBalance('donate-noakhali-flood');
    const accountBalancee = accountBalance('account-balance');
    

    if(noakhaliDonationInput > accountBalancee || /[a-zA-Z]/.test(noakhaliDonationInput)){
        document.getElementById('noakhali-donate-error').classList.remove ('hidden');
    }
        
    else{
        if(noakhaliDonationInput > 0 || typeof noakhaliDonationInput.valueOf === 'number'){
            document.getElementById('noakhali-donate-error').classList.add ('hidden');
    
            document.getElementById('noakhali-popup-section').classList.remove('hidden');
            document.getElementById('noakhali-popup-btn').addEventListener('click', function(){
                document.getElementById('noakhali-popup-section').classList.add('hidden');
            });
    
            
            const noakhaliDonation = donationBalance('noakhali-donation');
            const totalNoakhaliDonationBalance = noakhaliDonation + noakhaliDonationInput;
            const remainingAccountBalance = accountBalancee - noakhaliDonationInput;
            document.getElementById('noakhali-donation').innerText = totalNoakhaliDonationBalance;
            document.getElementById('account-balance').innerText = remainingAccountBalance;
    
    
            const noakhaliDonationHistory = document.createElement('div');
    
            noakhaliDonationHistory.className = 'bg-white border rounded-xl px-6 py-6 space-y-2';
    
            const options = {
                weekday: 'short', // Tue
                year: 'numeric',  // 2024
                month: 'short',   // Sep
                day: 'numeric',   // 17
                hour: '2-digit',  // 08
                minute: '2-digit',// 39
                second: '2-digit',// 11
                
            };
    
          
            const now = new Date();
           
    
    
            noakhaliDonationHistory.innerHTML = `
                <h2 class = "text-base	 font-bold">${noakhaliDonationInput} Taka is donated for flood relief at Noakhali, Bangladesh </h2>
                <p class = "text-xs font-light">Date : ${now.toLocaleString('en-US', options)} ${now.toString().match(/GMT[+-]\d{4}/)[0]} (${now.toString().match(/\((.*)\)/)[1]})</P>
            
            `
    
            document.getElementById('history-section').classList.remove('hidden');
            
            const noakhaliHistoryContainer = document.getElementById('history-section');
            noakhaliHistoryContainer.insertBefore(noakhaliDonationHistory, noakhaliHistoryContainer.firstChild);
    
            document.getElementById('history-section').classList.add('hidden');
    
        }
    
        else{
            document.getElementById('noakhali-donate-error').classList.remove ('hidden');
        }
    }

});

document.getElementById('donate-feni').addEventListener('click', function(event){
    event.preventDefault();


    const feniDonationInput = inputBalance('donate-feni-flood');
    const accountBalancee = accountBalance('account-balance');

    if(feniDonationInput > accountBalancee || /[a-zA-Z]/.test(feniDonationInput)){
        document.getElementById('feni-donate-error').classList.remove('hidden');
    }

    else{
        if(feniDonationInput > 0 || typeof feniDonationInput.valueOf === 'number' ){

            document.getElementById('feni-donate-error').classList.add ('hidden');
    
            
        document.getElementById('feni-popup-section').classList.remove('hidden');
        document.getElementById('feni-popup-btn').addEventListener('click', function(){
            document.getElementById('feni-popup-section').classList.add('hidden');
        });
    
            
            const feniDonation = donationBalance('feni-donation');
            const totalFeniDonationBalance = feniDonation + feniDonationInput;
            const remainingAccountBalance = accountBalancee - feniDonationInput;
        
            document.getElementById('feni-donation').innerText = totalFeniDonationBalance;
            document.getElementById('account-balance').innerText = remainingAccountBalance;
    
    
    
            const feniDonationHistory = document.createElement('div');
    
            feniDonationHistory.className = 'bg-white border rounded-xl px-6 py-6 space-y-2';
    
            const options = {
                weekday: 'short', // Tue
                year: 'numeric',  // 2024
                month: 'short',   // Sep
                day: 'numeric',   // 17
                hour: '2-digit',  // 08
                minute: '2-digit',// 39
                second: '2-digit',// 11
                
            };
    
          
            const now = new Date();
           
    
    
            feniDonationHistory.innerHTML = `
                <h2 class = "text-base	 font-bold">${feniDonationInput} Taka is donated for flood relief at Feni, Bangladesh </h2>
                <p class = "text-xs font-light">Date : ${now.toLocaleString('en-US', options)} ${now.toString().match(/GMT[+-]\d{4}/)[0]} (${now.toString().match(/\((.*)\)/)[1]})</P>
            
            `
    
            document.getElementById('history-section').classList.remove('hidden');
            
            const feniHistoryContainer = document.getElementById('history-section');
            feniHistoryContainer.insertBefore(feniDonationHistory, feniHistoryContainer.firstChild);
    
            document.getElementById('history-section').classList.add('hidden');
    
    
        }
    
        else{
            document.getElementById('feni-donate-error').classList.remove('hidden');
    
        };
    
       
    };
});


    

    

document.getElementById('donate-quota-movement-aid').addEventListener('click', function(event){
    event.preventDefault();

   
    
    
   const aidDonationInput = inputBalance('donate-aid');
   const accountBalancee = accountBalance('account-balance');
    
    
    if(aidDonationInput > accountBalancee || /[a-zA-Z]/.test(aidDonationInput)){
        document.getElementById('donate-aid-error').classList.remove('hidden');
    }

    else{
        


        

        if(aidDonationInput > 0 || typeof aidDonationInput.valueOf === 'number' ){

            document.getElementById('donate-aid-error').classList.add('hidden');
    
            document.getElementById('quota-popup-section').classList.remove('hidden');
            document.getElementById('quota-popup-btn').addEventListener('click', function(){
                document.getElementById('quota-popup-section').classList.add('hidden');
                
            });
            
    
           
            const quotaMovementDonation = donationBalance('quota-movement-donation');
            const totalAidDonationBalance = quotaMovementDonation + aidDonationInput;
            const remainingAccountBalance = accountBalancee - aidDonationInput;
            document.getElementById('quota-movement-donation').innerText = totalAidDonationBalance;
            document.getElementById('account-balance').innerText = remainingAccountBalance;
    
            
    
    
    
            const quotaDonationHistory = document.createElement('div');
    
            quotaDonationHistory.className = 'bg-white border rounded-xl px-6 py-6 space-y-2';
    
            const options = {
                weekday: 'short', // Tue
                year: 'numeric',  // 2024
                month: 'short',   // Sep
                day: 'numeric',   // 17
                hour: '2-digit',  // 08
                minute: '2-digit',// 39
                second: '2-digit',// 11
                
            };
    
          
            const now = new Date();
           
    
    
            quotaDonationHistory.innerHTML = `
                <h2 class = "text-base	 font-bold">${aidDonationInput} Taka is donated for Aid for injured in the Quota Movement, Bangladesh </h2>
                <p class = "text-xs font-light">Date : ${now.toLocaleString('en-US', options)} ${now.toString().match(/GMT[+-]\d{4}/)[0]} (${now.toString().match(/\((.*)\)/)[1]})</P>
            
            `
    
            document.getElementById('history-section').classList.remove('hidden');
            
            const quotaDonationHistoryContainer = document.getElementById('history-section');
            quotaDonationHistoryContainer.insertBefore(quotaDonationHistory, quotaDonationHistoryContainer.firstChild);
    
            document.getElementById('history-section').classList.add('hidden');
    
            
        }
        
        else{
            document.getElementById('donate-aid-error').classList.remove('hidden');
            
    
            
    
    
        };


    };

})




