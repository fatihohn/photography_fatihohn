function imgClick() {
    const containerAll = document.querySelectorAll(".container");

    const subWrap = document.querySelector(".subwrap");
    const subStillObjects = document.querySelector(".sub_stillObjects");
    const subPerformance = document.querySelector(".sub_performance");
    const subNatureLandscape = document.querySelector(".sub_natureLandscape");
    const subArtistic = document.querySelector(".sub_artictic");
    const displayInit = "initial";
    const displayNone = "none";
    const clickedName = event.target.getAttribute('name');

    const sub = `sub_`

    //querySelector에 variable을 넣고 싶으면, CSS.escape()을 사용해야한다. querySelector안의 ()는 css 문법을 따르므로.  ---  https://stackoverflow.com/questions/37081721/use-variables-in-document-queryselector

    const clickedSubAll = document.querySelectorAll('.' + CSS.escape(sub) + CSS.escape(clickedName));
    const clickedSub = document.querySelector('.' + CSS.escape(sub) + CSS.escape(clickedName));
    //querySelector(str+CSS.escape(variable))형태일때는 또 ""를 씌워줄 필요가 없다.

    // console.log(clickedSub);


    function handleClick() {
        let i;
        for (i = 0; i < clickedSubAll.length; i++) {
            const currentDisplay = clickedSubAll[i].style.display;
            if (currentDisplay === displayNone) {
                clickedSubAll[i].style.display = displayInit;
            } else {
                clickedSubAll[i].style.display = displayNone;
            }
        }
    }

    function init() {
        // clickedSub.style.display = displayNone;
        // container.addEventListener("click", handleClick);

        let y;
        for (y = 0; y < containerAll.length; y++) {
            // clickedSubAll[i].style.display = displayNone;
            containerAll[y].addEventListener("click", handleClick);
        }
    }

    init();

}