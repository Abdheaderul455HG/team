// الأسئلة الشائعة - عرض وإخفاء الإجابات
document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll('.faq-item h3');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const content = item.nextElementSibling;
            const icon = item.querySelector('.icon');
            if (content.style.display === 'block') {
                content.style.display = 'none';
                icon.textContent = '+';
            } else {
                content.style.display = 'block';
                icon.textContent = '-';
            }
       });
});
});

document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", () => {
        // تحقق إذا كان التمرير للأسفل
        if (window.scrollY >= 1000) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
