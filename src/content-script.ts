function ready(callback: () => void) {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
    fixMapsEmbed(".V1GY4c")
    fixMapsEmbed(".TlfAte")
    fixMapsEmbed("#lu_map")
});

function fixMapsEmbed(className: string) {
    const embed = document.querySelector(className)
    const parent = embed?.parentNode;
    if (!parent) return;

    const link = document.createElement("a")
    const params = new URLSearchParams(window.location.search)
    const name = params.get("q")!!
    link.setAttribute("href", `/maps/search/${name}`)

    const expandButton = document.createElement("div");
    const expandButtonStyle = "align-items: center;\n" +
        "background-color: rgba(0, 0, 0, 0.6);\n" +
        "border-radius: 50%;\n" +
        "color: #fff;\n" +
        "display: flex;\n" +
        "justify-content: center;\n" +
        "position: absolute;\n" +
        "right: 12px;\n" +
        "top: 12px;\n" +
        "height: 30px;\n" +
        "width: 30px;\n";
    const expandIcon = document.createElement("img");
    expandIcon.setAttribute("src", chrome.runtime.getURL("expand_content.svg"))
    expandIcon.setAttribute("style", "height:18px;line-height:18px;width:18px;fill:currentColor;")

    expandButton.appendChild(expandIcon);
    expandButton.setAttribute("style", expandButtonStyle);
    expandButton.setAttribute("aria-hidden", "true");

    parent.removeChild(embed)
    link.appendChild(embed);
    embed.appendChild(expandButton)

    parent.appendChild(link)
}
