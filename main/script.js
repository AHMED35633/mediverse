const img = document.getElementById('about');
let show = true;
const observer = new IntersectionObserver(entries => {
  if (show) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        img.style.animation = "fadeIn 1s ease-in-out";
        show = false; // Prevent further animations
      } else {
        img.style.animation = "none";
      }
    });
  }
});
observer.observe(img);

// diseases

// ننتظر تحميل الصفحة بالكامل
document.addEventListener("DOMContentLoaded", () => {
  // كل الأزرار في قسم الأمراض
  const buttons = document.querySelectorAll(".diseases .buttons button");

  // كل الكونتينرات اللي فيها محتوى المرض
  const containers = document.querySelectorAll(".diseases-container .content");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // أولاً: نخفي كل الكونتينرات
      containers.forEach((container) => {
        container.style.display = "none";
      });

      // ثانياً: نجيب اسم الزر، ونضيف "-container" عليه عشان نجيب العنصر الصحيح
      const className = button.className + "-container";

      // ثالثاً: نعرض الكونتينر المطابق للزرار
      const target = document.querySelector(`.${className}`);
      if (target) {
        target.style.display = "flex"; // لأن الكونتينرات flex
      }
    });
  });

  // افتراضياً: نخفي كل الكونتينرات عند بداية الصفحة
  containers.forEach((container) => {
    container.style.display = "none";
  });
});

