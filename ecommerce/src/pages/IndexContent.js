function IndexContent() {
    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = "function transformScroll(event) { if (!event.deltaY) { return; } event.currentTarget.scrollLeft += event.deltaY + event.deltaX; event.preventDefault(); } var element = document.scrollingElement || document.documentElement; element.addEventListener('wheel', transformScroll);";
    document.body.append(inlineScript);

    return (
        <div className="horizontal-scroll">
            <img alt="mural" src="./images/image01.jpg" />
            <img alt="mural" src="./images/image02.jpg" />
            <img alt="mural" src="./images/image03.jpg" />
            <img alt="mural" src="./images/image04.jpg" />
            <img alt="mural" src="./images/image05.jpg" />
            <img alt="mural" src="./images/image06.jpg" />
            <img alt="mural" src="./images/image07.jpg" />
            <img alt="mural" src="./images/ossian01.jpg" />
            <img alt="mural" src="./images/ossian02.jpg" />
        </div>
    );
}

export default IndexContent;