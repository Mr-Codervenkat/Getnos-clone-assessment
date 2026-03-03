document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", () => {

        const currentItem = question.parentElement;
        const allItems = document.querySelectorAll(".faq-item");

        // Close all other items
        allItems.forEach(item => {
            if (item !== currentItem) {
                item.classList.remove("active");
                item.querySelector(".faq-toggle").textContent = "+";
            }
        });

        // Toggle current item
        currentItem.classList.toggle("active");

        const toggle = question.querySelector(".faq-toggle");

        if (currentItem.classList.contains("active")) {
            toggle.textContent = "×";
        } else {
            toggle.textContent = "+";
        }

    });
});