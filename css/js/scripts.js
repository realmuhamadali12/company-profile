// js/scripts.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Kirim email
    window.location.href = `mailto:muhamadali1203@gmail.com?subject=Message from ${name}&body=${message}`;

    // Tampilkan pesan konfirmasi
    const confirmationMessage = document.createElement('div');
    confirmationMessage.textContent = 'Pesan Anda telah terkirim. Terima kasih atas tanggapan Anda!';
    confirmationMessage.classList.add('alert', 'slideIn');
    document.body.appendChild(confirmationMessage);

    // Hapus pesan konfirmasi setelah beberapa detik
    setTimeout(() => {
        confirmationMessage.remove();
    }, 3000);
});

    
    
