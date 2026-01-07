document.addEventListener('DOMContentLoaded', () => {
    // 1. 文字縮放
    const increaseBtn = document.getElementById('font-increase');
    const decreaseBtn = document.getElementById('font-decrease');
    let currentFontSize = 16; 

    increaseBtn.addEventListener('click', () => {
        if (currentFontSize < 24) { 
            currentFontSize += 2;
            document.body.style.fontSize = currentFontSize + 'px';
        }
    });

    decreaseBtn.addEventListener('click', () => {
        if (currentFontSize > 12) {
            currentFontSize -= 2;
            document.body.style.fontSize = currentFontSize + 'px';
        }
    });

    // 2. 輪播控制
    const slide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let counter = 0;

    if(next && prev) {
        next.addEventListener('click', () => {
            counter = (counter >= images.length - 1) ? 0 : counter + 1;
            slide.style.transform = `translateX(${-100 * counter}%)`;
        });
        prev.addEventListener('click', () => {
            counter = (counter <= 0) ? images.length - 1 : counter - 1;
            slide.style.transform = `translateX(${-100 * counter}%)`;
        });
    }

    // 3. 回到頂部
    const backToTop = document.getElementById('backToTop');
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});