function aboutClick() {
    const aboutContent = document.querySelector(".about_content");
    const aboutWrap = document.querySelector(".about_wrap");
    const displayInit = "initial";
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
        aboutContent.style.display = displayInit;
        aboutWrap.addEventListener("click", handleClick);
    }

    init();

}