const container= document.getElementById("root");

function renderElement(element, container){
    const docElement= document.createElement(element.type);
    docElement.textContent= element.props.children;

    for(let prop in element.props){
        if(prop==="children") continue;

        docElement.setAttribute(prop, element.props[prop])
    }

    container.appendChild(docElement);
}

const element= {
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank",
        children: "Click this link"
    }
}

renderElement(element, container);