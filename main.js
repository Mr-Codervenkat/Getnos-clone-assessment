document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", () => {

        const item = question.parentElement;

        item.classList.toggle("active");

        const toggle = question.querySelector(".faq-toggle");

        if (item.classList.contains("active")) {
            toggle.textContent = "×";
        } else {
            toggle.textContent = "+";
        }
    });
});