import { useEffect } from 'react';

export function useMSAEffects() {
  useEffect(() => {
    // --- SCRAMBLE TEXT ENGINE ---
    function scrambleText(element) {
      const chars = '!<>-_\\/[]{}—=+*^?#________';
      const originalText = element.textContent;
      let iteration = 0;
      const interval = setInterval(() => {
        element.textContent = originalText
          .split('')
          .map((letter, index) => {
            if (index < iteration) return originalText[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');
        if (iteration >= originalText.length) clearInterval(interval);
        iteration += 1 / 3;
      }, 30);
    }

    // --- STAT COUNTER ---
    function animateStat(stat) {
      const target = +stat.getAttribute('data-target');
      const speed = 100;
      const increment = target / speed;
      const updateCount = () => {
        const count = +stat.innerText;
        if (count < target) {
          stat.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          stat.innerText = target;
        }
      };
      updateCount();
    }

    // --- INTERSECTION OBSERVER ---
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('scramble')) scrambleText(entry.target);
            if (entry.target.classList.contains('stat-number')) animateStat(entry.target);
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.scramble, .reveal-item, .stat-number').forEach((el) =>
      observer.observe(el)
    );

    // --- HUD CURSOR ---
    const hud = document.getElementById('cursor-hud');
    let mouseX = 0, mouseY = 0, ballX = 0, ballY = 0;
    let animFrame;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      ballX += (mouseX - ballX) * 0.15;
      ballY += (mouseY - ballY) * 0.15;
      if (hud) {
        hud.style.left = ballX + 'px';
        hud.style.top = ballY + 'px';
      }
      animFrame = requestAnimationFrame(animateCursor);
    };

    if (hud) {
      document.addEventListener('mousemove', onMouseMove);
      animateCursor();
    }

    // --- HOVER / CLICK SOUNDS ---
    const hoverSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');
    const clickSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');
    hoverSound.volume = 0.05;
    clickSound.volume = 0.1;

    const onMouseOver = (e) => {
      const target = e.target.closest(
        '.nav-links a, .lang-switch, .service-hex, .msa-item, .btn-legacy, .btn-price, a, button'
      );
      if (target) {
        hoverSound.currentTime = 0;
        hoverSound.play().catch(() => {});
        if (hud) hud.classList.add('hud-active');
      }
    };

    const onMouseOut = () => {
      if (hud) hud.classList.remove('hud-active');
    };

    const onClick = (e) => {
      const target = e.target.closest(
        '.nav-links a, .lang-switch, .msa-item, a, button'
      );
      if (target) {
        clickSound.currentTime = 0;
        clickSound.play().catch(() => {});
      }
    };

    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    document.addEventListener('click', onClick);

    // --- LOGO GLITCH ---
    const logo = document.querySelector('.logo');
    if (logo && !logo.dataset.glitched) {
      logo.dataset.glitched = 'true';
      logo.classList.add('logo-glitch');
      const trigger = () => {
        logo.classList.add('active');
        setTimeout(() => logo.classList.remove('active'), 400);
      };
      const glitchInterval = setInterval(trigger, 10000);
      logo.addEventListener('mouseenter', trigger);

      return () => {
        clearInterval(glitchInterval);
        observer.disconnect();
        cancelAnimationFrame(animFrame);
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseover', onMouseOver);
        document.removeEventListener('mouseout', onMouseOut);
        document.removeEventListener('click', onClick);
      };
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animFrame);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.removeEventListener('click', onClick);
    };
  }, []);
}

export function useAudio() {
  useEffect(() => {
    const bgMusic = document.getElementById('bg-music-file');
    const playBtn = document.getElementById('manual-audio-control');
    const initialVolume = 0.2;

    const startMusic = () => {
      const hasWelcomed = sessionStorage.getItem('msa_welcome_played');
      if (bgMusic && bgMusic.paused && !hasWelcomed) {
        bgMusic.volume = initialVolume;
        bgMusic.play()
          .then(() => sessionStorage.setItem('msa_welcome_played', 'true'))
          .catch(() => {});
      }
    };

    const onScroll = () => {
      if (bgMusic && !bgMusic.paused) {
        const scrollPercent =
          window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        bgMusic.volume = Math.max(0.05, initialVolume * (1 - scrollPercent));
      }
    };

    if (bgMusic) {
      bgMusic.onplay = () => {
        if (playBtn)
          playBtn.innerHTML =
            '<i class="fas fa-pause"></i><span class="audio-tooltip">Pause Music</span>';
      };
      bgMusic.onpause = () => {
        if (playBtn)
          playBtn.innerHTML =
            '<i class="fas fa-play"></i><span class="audio-tooltip">Play Music</span>';
      };
    }

    if (playBtn && bgMusic) {
      playBtn.onclick = (e) => {
        e.stopPropagation();
        startMusic();
        if (bgMusic.paused) bgMusic.play();
        else bgMusic.pause();
      };
    }

    window.addEventListener('scroll', onScroll);
    document.addEventListener('click', startMusic, { once: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
}
