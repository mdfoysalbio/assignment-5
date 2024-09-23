document.getElementById('faq-1').addEventListener('click', function(){
    document.getElementById('faq-1').classList.remove('collapse-close');
    document.getElementById('faq-2').classList.add('collapse-close');
    document.getElementById('faq-3').classList.add('collapse-close');
    document.getElementById('faq-4').classList.add('collapse-close');

    

});

document.getElementById('faq-2').addEventListener('click', function(){
    document.getElementById('faq-2').classList.remove('collapse-close');
    document.getElementById('faq-1').classList.add('collapse-close');
    document.getElementById('faq-3').classList.add('collapse-close');
    document.getElementById('faq-4').classList.add('collapse-close');

    

});

document.getElementById('faq-3').addEventListener('click', function(){
    document.getElementById('faq-3').classList.remove('collapse-close');
    document.getElementById('faq-1').classList.add('collapse-close');
    document.getElementById('faq-2').classList.add('collapse-close');
    document.getElementById('faq-4').classList.add('collapse-close');

    
});

document.getElementById('faq-4').addEventListener('click', function(){
    document.getElementById('faq-4').classList.remove('collapse-close');
    document.getElementById('faq-1').classList.add('collapse-close');
    document.getElementById('faq-2').classList.add('collapse-close');
    document.getElementById('faq-3').classList.add('collapse-close');

    
});




  