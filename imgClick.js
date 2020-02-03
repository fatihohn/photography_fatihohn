function imgClick() {
    const container = document.querySelector(".container");
    const subWrap = document.querySelector(".subwrap");
    const subStillObjects = document.querySelector(".sub_stillObjects");
    const subPerformance = document.querySelector(".sub_performance");
    const subNatureLandscape = document.querySelector(".sub_natureLandscape");
    const subArtistic = document.querySelector(".sub_artictic");
    const displayIn = "initial";
    const displayNone = "none";
    const clickedName = event.target.getAttribute('name');
    const sub1 = `.sub_`
    const sub2 = `sub_`
    const sub1_clickedName = `"` + sub1 + clickedName + `"`;
    //querySelector에 variable을 넣고 싶으면, CSS.escape()을 사용해야한다. querySelector안의 ()는 css 문법을 따르므로.  ---  https://stackoverflow.com/questions/37081721/use-variables-in-document-queryselector
    const sub2_clickedName = `".` + sub2 + clickedName + `"`;
    const clickedSubAll = document.querySelectorAll('.' + CSS.escape(sub2) + CSS.escape(clickedName));
    const clickedSub = document.querySelector('.' + CSS.escape(sub2) + CSS.escape(clickedName));
    //querySelector(str+CSS.escape(variable))형태일때는 또 ""를 씌워줄 필요가 없다.

    // console.log(clickedSub);


    function handleClick() {


        const currentDisplay = clickedSubAll[i].style.display;
        console.log(currentDisplay);
        let i;
        for (i = 0; i < clickedSubAll.length; i++) {

            if (currentDisplay === displayNone) {
                clickedSubAll[i].style.display = displayIn;

            } else {
                clickedSubAll[i].style.display = displayNone;

            }


        }


    }



    function init() {
        clickedSub.style.display = displayIn
        container.addEventListener("click", handleClick);
    }

    init();

}