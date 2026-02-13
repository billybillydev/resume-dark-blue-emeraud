/**
 * @typedef {Object} PrintDataOutput
 * @property {Function} print
 * @property {{
 *  "@keyup.window": (this: PrintDataOutput & { $event: KeyboardEvent }) => void,
 *  "@click": (this: PrintDataOutput & { $event: MouseEvent }) => void
 * }} trigger
 */


/**
 * Print alpine data
 * 
 * @returns {import("alpinejs").AlpineComponent<PrintDataOutput>}
 */
export function printData() {
    return {
        print() {
            window.print();
        },
        trigger: {
            ["@keyup.window"]() {
                if (this.$event.key === "p") {
                    this.print();
                }
            },
            ["@click"]() {
                this.print();
            }
        }
    }
}