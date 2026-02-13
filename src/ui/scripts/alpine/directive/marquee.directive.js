/**
 * Marquee alpine directive
 * @param {HTMLElement} el The HTML element
 * @return {void}
 */
export function marqueeDirective(el) {
  const marquee = new Marquee(el);
  marquee.setupt();

  window.addEventListener("resize", () => {
    marquee.setupt();
  });
}

/**
 * @class Marquee
 * @description Marquee class
 * @private {HTMLElement} el The HTML element
 * @private {number} shift The shift value
 */
class Marquee {
    shift = 0;
    /**
     * @param {HTMLElement} el The HTML element
     */
    constructor(el) {
        this.el = el;
    }

    setupt() {
        const parentElement = this.el.parentElement;

        if (!parentElement) {
          throw new Error("Parent element not found");
        }

        const parentWidth = parentElement.clientWidth;
        const elementWidth = this.el.scrollWidth;

        this.shift = Math.max(0, elementWidth - parentWidth);
        
        this.el.style.setProperty("--shift", `${this.shift}px`);
        this.el.classList.add("marquee", "print:animate-none", "border", "border-red-500");
    }
}