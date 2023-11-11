
const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
const mobileMenu = document.getElementById('mobile-menu');

// Menambahkan event listener untuk meng-handle klik pada tombol hamburger
mobileMenuButton.addEventListener('click', function () {
  const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;

  // Mengubah atribut aria-expanded
  mobileMenuButton.setAttribute('aria-expanded', !expanded);

  // Menampilkan atau menyembunyikan menu mobile
  mobileMenu.hidden = !mobileMenu.hidden;
});
mobileMenuButton.addEventListener('click', function () {
  const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;

  // Mengubah atribut aria-expanded setelah penundaan 500 milidetik (0.5 detik)
  setTimeout(function () {
    mobileMenuButton.setAttribute('aria-expanded', !expanded);
  }, 500);
});
// Fungsi untuk memicu animasi masuk elemen "h1"
function triggerTitleAnimation() {
  const title = document.getElementById('animation');
  title.style.opacity = '1';
  title.style.transform = 'translateY(0)';
}

// Memicu animasi saat halaman dimuat
window.addEventListener('load', triggerTitleAnimation);

// Fungsi untuk memicu animasi masuk elemen "p"
function triggerParagraphAnimation() {
  const paragraph = document.getElementById('paragraph-animation');
  paragraph.style.opacity = '1';
  paragraph.style.transform = 'translateY(0)';
}

// Memicu animasi saat halaman dimuat
window.addEventListener('load', triggerParagraphAnimation);


document.addEventListener('DOMContentLoaded', function () {
  const aboutSection = document.getElementById('about');

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function animateIfVisible() {
    const aboutElements = document.querySelectorAll('.animate');

    aboutElements.forEach((el) => {
      if (isElementInViewport(el) && !el.classList.contains('opacity-100')) {
        el.classList.add('opacity-100');
      }
    });
  }

  window.addEventListener('scroll', animateIfVisible);
  window.addEventListener('resize', animateIfVisible);

  // Trigger animation on page load
  animateIfVisible();
});

document.addEventListener('DOMContentLoaded', function () {
  // Dapatkan semua tautan dengan kelas 'scroll-link'
  const scrollLinks = document.querySelectorAll('a[href^="#"]');

  // Tambahkan penanganan klik pada setiap tautan
  scrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      // Dapatkan target elemen berdasarkan hash dari tautan
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      // Gulir ke elemen target dengan efek smooth
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

// Add the sticky class to the navbar when you reach its scroll position
window.onscroll = function () {
  stickyNav();
};

document.addEventListener('DOMContentLoaded', function () {
  var aboutSection = document.getElementById('about');

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function animateElements() {
    if (isInViewport(aboutSection)) {
      aboutSection.classList.add('animate-opacity-1');
    }
  }

  // Run the animation on page load
  animateElements();

  // Run the animation when the user scrolls
  window.addEventListener('scroll', function () {
    animateElements();
  });
})


function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

