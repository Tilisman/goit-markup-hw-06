window.addEventListener("DOMContentLoaded", init)

function init() {
    const { height: pageHeaderHeight } = document
        .querySelector(".page-header")
        .getBoundingClientRect();

    document.body.style.paddingTop = `${pageHeaderHeight}px`;

}