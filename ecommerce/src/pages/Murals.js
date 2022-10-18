
function Murals () {
    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = "function transformScroll(event) \{ if (!event.deltaY) \{ return\; \} event.currentTarget.scrollLeft += event.deltaY + event.deltaX\; event.preventDefault()\; \} var element = document.scrollingElement || document.documentElement\; element.addEventListener('wheel', transformScroll);";
    document.body.append(inlineScript);
    return (
        <div className="horizontal-scroll">
            <img src="./images/mural01.jpg" />
            <img src="./images/mural02.jpg" />
            <img src="./images/mural03.jpg" />
            <img src="./images/mural04.jpg" />
            <img src="./images/mural05.jpg" />
            <img src="./images/mural06.jpg" />
            <img src="./images/mural07.jpg" />
            <img src="./images/mural08.jpg" />
            <img src="./images/mural09.jpg" />
            <img src="./images/mural10.jpg" />
            <img src="./images/mural11.jpg" />
            <img src="./images/mural12.jpg" />
        </div>
    )
}
export default Murals;

