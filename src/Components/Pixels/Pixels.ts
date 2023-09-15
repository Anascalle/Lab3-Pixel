export enum Pixel {
    "backgroundcolor" = "backgroundcolor"
}

class PixelColor extends HTMLElement {

    backgroundcolor?: string;

    static get observedAttributes (){
        const attrs: Record <Pixel, null> = {
            backgroundcolor: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(propName:Pixel,oldValue: string | undefined,newValue: string | undefined){
       
            this[propName] = newValue;
            this.render();
         
        }
        
     

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    this.render();
    }
   
    connectedCallback(){
        this.render();
    }

    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./Pixel.css">
            <div class="${this.backgroundcolor}"> 
            </div>
            `
            
        }
    }
}

customElements.define("my-div", PixelColor);
export default PixelColor;