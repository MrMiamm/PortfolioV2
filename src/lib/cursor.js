/**************************************************************************/
/*Curseur*/

function createCursorElement(className) {
    const element = document.createElement("div");
    element.classList.add(className);
    document.body.appendChild(element);
    return element;
}

function setupCursorMovement(innerCursor, outerCursor, info) {
    let cursorX = 0, cursorY = 0;
    let requestId;

    document.addEventListener("mousemove", (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;
        if (!requestId) {
            requestId = requestAnimationFrame(() => updateCursorPosition(innerCursor, outerCursor, info, cursorX, cursorY));
        }
    });

    //Vérifier au scroll si le curseur est sur un lien
    document.addEventListener("scroll", () => {
        if (!requestId) {
            requestId = requestAnimationFrame(() => updateCursorPosition(innerCursor, outerCursor, info, cursorX, cursorY));
        }
    });

    function updateCursorPosition(innerCursor, outerCursor, info, x, y) {
        innerCursor.style.left = `${x}px`;
        innerCursor.style.top = `${y}px`;
        outerCursor.style.left = `${x}px`;
        outerCursor.style.top = `${y}px`;
        info.style.left = `${x + 10}px`;
        info.style.top = `${y - 10}px`;
        requestId = null;
    }
}

function setupLinkHoverEffects(innerCursor, outerCursor, info) {
    const links = [...document.querySelectorAll("a"), ...document.querySelectorAll(".clickable")].filter(Boolean);
    links.forEach(link => {
        link.style.cursor = "none";
        link.addEventListener("mouseover", () => handleLinkHover(link, innerCursor, outerCursor, info, true));
        link.addEventListener("mouseleave", () => handleLinkHover(link, innerCursor, outerCursor, info, false));
    });
}

function handleLinkHover(link, innerCursor, outerCursor, info, isHovered) {
    innerCursor.classList.toggle("grow", isHovered);
    outerCursor.style.opacity = isHovered ? "0" : "1";
    
    if (link.classList.contains("info")) {
        info.textContent = isHovered ? link.firstChild.alt : "";
        info.style.opacity = isHovered ? "1" : "0";
    }
}

/* Initialisation */
export function initCustomCursor() {
    if (document.body.classList.contains("desktop")) {
        const innerCursor = createCursorElement("inner-cursor");
        const outerCursor = createCursorElement("outer-cursor");
        const info = createCursorElement("info");

        document.body.style.cursor = "none";
        setupCursorMovement(innerCursor, outerCursor, info);
        setupLinkHoverEffects(innerCursor, outerCursor, info);
    }
}