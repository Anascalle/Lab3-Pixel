(()=>{"use strict";const e=[[[0,0,1,1,1,1,0,0],[0,1,0,0,0,0,1,0],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,1,0,0,1,0,1],[1,0,0,0,0,0,0,1],[0,1,0,0,0,0,1,0],[0,0,1,1,1,1,0,0]],[[0,0,0,0,0],[0,1,1,1,0],[0,1,0,1,0],[0,1,1,1,0],[0,0,0,0,0]],[[0,0,1,0,0],[0,1,0,1,0],[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0]],[[0,0,1,1,1,1,0,0],[0,1,0,0,0,0,1,0],[1,0,1,0,0,1,0,1],[1,0,0,0,0,0,0,1],[1,1,1,0,0,1,1,1],[0,0,0,1,1,0,0,0]],[[0,0,1,0,0],[0,1,0,1,0],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,1]],[[0,0,1,1,1,1,1,0,0],[0,1,0,0,0,0,0,1,0],[1,0,1,0,0,0,1,0,1],[1,0,0,0,0,0,0,0,1],[1,0,1,0,0,0,1,0,1],[1,0,0,1,1,1,0,0,1],[0,1,0,0,0,0,0,1,0],[0,0,1,1,1,1,1,0,0]],[[0,0,1,1,1,1,0,0],[0,1,0,0,0,0,1,0],[1,0,1,0,0,1,0,1],[1,0,0,0,0,0,0,1],[1,1,1,0,0,1,1,1],[0,0,0,1,1,0,0,0]],[[0,0,1,0,0,0,1,0,0],[0,0,1,0,0,0,1,0,0],[1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,0,0],[0,0,0,1,1,1,0,0,0]]];var t;!function(e){e.backgroundcolor="backgroundcolor"}(t||(t={}));class o extends HTMLElement{static get observedAttributes(){return Object.keys({backgroundcolor:null})}attributeChangedCallback(e,t,o){this[e]=o,this.render()}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <link rel="stylesheet" href="./Pixel.css">\n            <div class="${this.backgroundcolor}"> \n            </div>\n            `)}}customElements.define("my-div",o);class s extends HTMLElement{constructor(){super(),this.divscolor=[],this.attachShadow({mode:"open"}),e.forEach((e=>{const o=this.ownerDocument.createElement("div");o.classList.add("divArray"),e.forEach((e=>{const s=this.ownerDocument.createElement("div");s.classList.add("lineDiv"),e.forEach((e=>{const o=this.ownerDocument.createElement("my-div");0===e?o.setAttribute(t.backgroundcolor,"white"):o.setAttribute(t.backgroundcolor,"black"),s.appendChild(o)})),o.appendChild(s)})),this.divscolor.push(o)}))}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML='<link rel="stylesheet" href="index.css">',this.divscolor.forEach((e=>{var t;null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)})))}}customElements.define("app-container",s)})();