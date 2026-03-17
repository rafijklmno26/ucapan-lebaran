window.onload = function() {
  const text = `Taqabbalallahu minna wa minkum 🌙✨

Mohon maaf lahir dan batin, atas segala khilaf dan salah, baik perkataan maupun perbuatan.

Untuk Adel dan semua orang terkasih, semoga Idul Fitri ini membawa kebahagiaan, kesehatan, dan rezeki yang berlimpah.

Teruslah melangkah penuh semangat dan keyakinan. Setiap ujian akan berbuah kemudahan. Percayalah, masa depan indah sedang menanti. Jangan pernah berhenti bermimpi dan berusaha, kamu hebat dan dicintai! 💚

Eid Mubarak!`;
  const typewriter = document.getElementById('typewriter');
  let i = 0;
  const speed = 31; // ms per karakter

  function type() {
    if (i < text.length) {
      typewriter.innerHTML += text[i] === '\n' ? '<br>' : text[i];
      i++;
      setTimeout(type, (text[i-1] === '\n') ? speed+170 : speed);
    } else {
      // Fade in footer setelah typing selesai
      document.querySelector('.footer').style.animation = 'fadeIn 1s forwards';
    }
  }

  // Fade-in judul setelah awal load untuk efek
  setTimeout(()=>{
    document.querySelector('h1').style.opacity = 1;
  }, 500);

  type();
};