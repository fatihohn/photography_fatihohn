function aboutClick() {
    const aboutContent = document.querySelector(".about_content");
    const aboutTitle = document.querySelector(".about_title");
    const displayInit = "grid";
    const displayNone = "none";


    function handleClick() {
        const currentDisplay = aboutContent.style.display;
        if (currentDisplay === displayNone) {
            aboutContent.style.display = displayInit;
        } else {
            aboutContent.style.display = displayNone;
        }
    }

    function init() {
        aboutContent.style.display = displayNone;
        aboutTitle.addEventListener("click", handleClick);
    }

    init();

}