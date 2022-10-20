
function Murals () {
    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = "function transformScroll(event) { if (!event.deltaY) { return\; } event.currentTarget.scrollLeft += event.deltaY + event.deltaX; event.preventDefault(); } var element = document.scrollingElement || document.documentElement; element.addEventListener('wheel', transformScroll);";
    document.body.append(inlineScript);
    return (
        <div className="horizontal-scroll">
            <img alt="photo of mural" src="./images/mural01.jpg" />
            <img alt="photo of mural" src="./images/mural02.jpg" />
            <img alt="photo of mural" src="./images/mural03.jpg" />
            <img alt="photo of mural" src="./images/mural04.jpg" />
            <img alt="photo of mural" src="./images/mural05.jpg" />
            <img alt="photo of mural" src="./images/mural06.jpg" />
            <img alt="photo of mural" src="./images/mural07.jpg" />
            <img alt="photo of mural" src="./images/mural08.jpg" />
            <img alt="photo of mural" src="./images/mural09.jpg" />
            <img alt="photo of mural" src="./images/mural10.jpg" />
            <img alt="photo of mural" src="./images/mural11.jpg" />
            <img alt="photo of mural" src="./images/mural12.jpg" />
        </div>
    )
}
export default Murals;

