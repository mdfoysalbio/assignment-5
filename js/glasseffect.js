window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    // document.getElementById('navColor').classList.remove('bg-[#f9f7f3]');
    // document.getElementById('navColor').classList.add('bg-[#fdfcfb]')
    if (window.scrollY > 50) { 
      navbar.classList.add('glass-effect', 'shadow-lg');
      document.getElementById('navColor').classList.remove('bg-[#f9f7f3]');
    document.getElementById('navColor').classList.add('bg-[#fdfcfb]')
    } 
    
    else {
      navbar.classList.remove('glass-effect', 'shadow-lg');
      document.getElementById('navColor').classList.add('bg-[#f9f7f3]');
      document.getElementById('navColor').classList.remove('bg-[#fdfcfb]')
    }
  });