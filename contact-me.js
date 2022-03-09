const selector = document.getElementById("contact-reason");

const selectOption = () => {
    const selection = selector.value;
    const techfields = document.getElementById("language-type");
    const jobfields = document.getElementById("job-fields");

   if (selection === "job-opp") {
        techfields.classList.remove("show");
        techfields.classList.add("hidden");
        jobfields.classList.remove("hidden");
        jobfields.classList.add("show");
    } else if (selection === "talk-code") {
        jobfields.classList.remove("show");
        jobfields.classList.add("hidden");
        techfields.classList.remove("hidden");
        techfields.classList.add("show");
    } else {
        jobfields.classList.remove("show");
        techfields.classList.remove("show");
        jobfields.classList.add("hidden");
        techfields.classList.add("hidden");
    }

}



selector.addEventListener("change", selectOption)