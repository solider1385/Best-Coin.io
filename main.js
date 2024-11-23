let clickCount = 0;
const coin = document.getElementById('coin');

// لینک‌های سایت‌هایی که می‌خواهید باز کنید
const links = [
    "https://zireemilsoude.net/4/8540892",
    "https://zireemilsoude.net/4/8552265"
];

coin.addEventListener('click', () => {
    clickCount++;
    
    // اگر تعداد کلیک‌ها فرد باشد، لینک اول را باز کن
    if (clickCount % 2 === 1) {
        window.open(links[0], '_blank');
    } 
    // اگر تعداد کلیک‌ها زوج باشد، لینک دوم را باز کن
    else {
        window.open(links[1], '_blank');
    }
});
