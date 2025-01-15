const button = document.getElementById('ad-button');
    button?.addEventListener('click', () => {
        window.TelegramAdsController.triggerNativeNotification().then((result) => {
            // اینجا می‌توانید پیام پاداش را به کاربر نمایش دهید
            alert("شما تبلیغ را مشاهده کردید و پاداش خود را دریافت کردید!");
            }).catch((result) => {
            // در صورت بروز خطا می‌توانید اینجا پیام خطا را نمایش دهید
            alert("مشکلی در مشاهده تبلیغ پیش آمد.");
        });
    });
