window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    
    if (window.scrollY > 50) { 
      navbar.classList.add('glass-effect', 'shadow-lg');
      document.getElementById('navColor').classList.remove('bg-[#f9f7f3]');
    // document.getElementById('navColor').classList.add('bg-[#fefefe]')
    } 
    
    else {
      navbar.classList.remove('glass-effect', 'shadow-lg');
      document.getElementById('navColor').classList.add('bg-[#f9f7f3]');
      // document.getElementById('navColor').classList.remove('bg-[#fefefe]')
    }
  });


  