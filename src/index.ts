import * as components from "./Components/export";
import { objectWithImages } from "./data/data";
import PixelColor, { Pixel } from "./Components/Pixels/Pixels";

class AppContainer extends HTMLElement {

    divscolor: HTMLDivElement[] = [];

    constructor(){
        super();
        this.attachShadow({mode: "open"});

        objectWithImages.forEach((array) => {
            const divArray = this.ownerDocument.createElement("div");
            divArray.classList.add("divimage")
            array.forEach((lines) => {
                const linesDiv = this.ownerDocument.createElement("div");
                linesDiv.classList.add("lineDiv")
                lines.forEach((numbers) => {
                    const divNumber = this.ownerDocument.createElement("my-div");
                    if(numbers === 0){
                        divNumber.setAttribute(Pixel.backgroundcolor, "white")
                    }else{
                        divNumber.setAttribute(Pixel.backgroundcolor, "black")
                    };
                    linesDiv.appendChild(divNumber);
                })
                divArray.appendChild(linesDiv)
            })
            this.divscolor.push(divArray)
        })
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=`<link rel="stylesheet" href="index.css">`
            this.divscolor.forEach((div: HTMLDivElement) => {
                this.shadowRoot?.appendChild(div)
            })
    }
}
}

customElements.define("app-container", AppContainer);