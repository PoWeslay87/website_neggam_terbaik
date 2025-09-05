// script.js — Website Sahabat Sejati ❤️
// Dibuat dengan cinta oleh Weslay & Inenus

// ====================================
// Inisialisasi AOS (Animasi Scroll)
// ====================================
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// ====================================
// Saat DOM Siap
// ====================================
document.addEventListener('DOMContentLoaded', function () {

    // ==========================
    // Modal Popup Foto Profil
    // ==========================
    const fotoPopup = document.querySelectorAll('.foto-popup');
    const fotoBesar = document.getElementById('fotoBesar');
    const namaFoto = document.getElementById('namaFoto');

    if (fotoPopup.length > 0 && fotoBesar && namaFoto) {
        fotoPopup.forEach(foto => {
            foto.addEventListener('click', function () {
                const src = this.getAttribute('data-foto');
                const nama = this.getAttribute('data-nama');
                fotoBesar.src = src;
                namaFoto.textContent = nama;
            });
        });
    }

    // ==========================
    // Ganti Surat
    // ==========================
    const suratButton = document.getElementById('ganti-surat');
    const suratContent = document.getElementById('surat-content');

    if (suratButton && suratContent) {
        const suratList = [
            `Hai Sahabatku...<br><br>Aku pengen bilang, kamu itu kayak bintang. Kadang nggak kelihatan, tapi selalu ada di langit hatiku. Terima kasih udah jadi tempatku curhat, ketawa, bahkan nangis.<br><br>Kita emang beda, tapi justru itu yang bikin kita cocok. Janji ya, jangan pernah ilang. ❤️`,
            `Bestie...<br><br>Kadang aku mikir, gimana ya kalau dulu kita nggak ketemu? Pasti hidupku sepi banget. Kamu bikin hari-hariku berwarna.<br><br>Aku sayang kamu lebih dari kata-kata. Sampai kapan pun, kamu tetap nomor 1 di hatiku. Mau marah, ribut, ketawa — kita tetap sahabat sejati.`
        ];

        let suratIndex = 0;

        suratButton.addEventListener('click', () => {
            suratIndex = (suratIndex + 1) % suratList.length;
            suratContent.innerHTML = suratList[suratIndex];
        });
    }

    // ==========================
    // Countdown Timer
    // ==========================
    const countdownDate = new Date("Dec 25, 2025 00:00:00").getTime(); // Ganti sesuai tanggal spesial

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            const messageEl = document.getElementById('event-message');
            if (messageEl) messageEl.innerHTML = "🎉 SELAMAT! HARI INI HARI KITA! 🎉";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const updateElement = (id, value) => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = value.toString().padStart(2, '0');
        };

        updateElement('days', days);
        updateElement('hours', hours);
        updateElement('minutes', minutes);
        updateElement('seconds', seconds);
    }

    updateCountdown(); // Tampilkan langsung saat load
    const countdownInterval = setInterval(updateCountdown, 1000);
    
    // ==========================
    // Active Menu Saat Scroll
    // ==========================
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    function setActiveLink() {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // offset agar tidak terlalu pas
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === "#" + currentSection) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);
    setActiveLink(); // Set active saat halaman pertama kali load

    // ==========================
    // Smooth Scroll untuk Link Internal
    // ==========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // offset navbar
                    behavior: 'smooth'
                });
            }
        });
    });

});

// ==========================
// Background Music Control
// ==========================
const bgMusic = document.getElementById('bgMusic');
const toggleMusicBtn = document.getElementById('toggleMusicBtn');
const musicIcon = document.getElementById('musicIcon');

if (bgMusic && toggleMusicBtn && musicIcon) {
    // Coba play otomatis (beberapa browser butuh interaksi user dulu)
    bgMusic.play().catch(error => {
        console.log("Autoplay diblokir oleh browser. User harus klik dulu.");
        toggleMusicBtn.classList.remove('d-none');
    });

    toggleMusicBtn.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicIcon.className = 'fas fa-pause';
        } else {
            bgMusic.pause();
            musicIcon.className = 'fas fa-play';
        }
    });
}



