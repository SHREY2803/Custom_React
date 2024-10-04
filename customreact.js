function customRender(reactElement,container){
    
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children; 
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children; 
    for (const prop in reactElement.props) {
        if (prop === 'children') {
            continue;
        }
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type:'a',
    props:{
        href:"https://google.com",
        target: "_blank"
    },
    children:"Click here to open Google.com"
}
/*And this is how things work in react also, the element and the component that you create in react, the working of that element or the component behind the scene is same. */

const mainContainer = document.getElementById("root");

customRender(reactElement,mainContainer);