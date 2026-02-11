// Jalankan setelah dokumen siap
$(function () {
    // =========================
    // 1. NAVBAR ACTIVE ON CLICK
    // =========================
    const $navLinks = $('.navbar-nav .nav-link');
  
    $navLinks.on('click', function () {
      $navLinks.removeClass('active');
      $(this).addClass('active');
    });
  
    // =========================
    // 2. ABOUT SECTION SCROLL ANIMATION
    // =========================
    const $aboutSection = $('.about-section');
  
    function checkAboutInView() {
      if ($aboutSection.length === 0) return;
  
      const rect = $aboutSection[0].getBoundingClientRect();
      if (rect.top < window.innerHeight - 150) {
        $aboutSection.addClass('in-view');
        $(window).off('scroll', checkAboutInView);
      }
    }
  
    $(window).on('scroll', checkAboutInView);
    checkAboutInView(); // cek saat halaman baru dibuka
  
    // =========================
    // 3. PORTFOLIO TABS (Projects / Certificates / Tech Stack)
    // =========================
    const $tabBtns = $('.ps-tab-btn');
    const $tabContents = $('.ps-tab-content');
  
    $tabBtns.on('click', function () {
      const target = $(this).data('target'); // contoh: "ps-projects"
  
      // pindahkan active di tombol
      $tabBtns.removeClass('active');
      $(this).addClass('active');
  
      // tampilkan konten tab yang sesuai
      $tabContents.removeClass('active');
      $('#' + target).addClass('active');
    });
  
    // =========================
    // 4. CONTACT CARD SCROLL ANIMATION
    // =========================
    const animatedCards = document.querySelectorAll('.slide-left, .slide-right');
  
    if (animatedCards.length > 0 && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.25 }
      );
  
      animatedCards.forEach((card) => observer.observe(card));
    } else {
      // fallback kalau browser sangat tua: tampilkan saja tanpa animasi
      $('.slide-left, .slide-right').addClass('in-view');
    }
  });
  