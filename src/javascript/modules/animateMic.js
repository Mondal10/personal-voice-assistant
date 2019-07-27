/**
 * Toggling animation on button click class
 * Basically adds and remove animation class defined in mic-animation
 */
export class AnimateMic {

    /**
     * Start animation
     * @param {HTMLElement} element
     */
    static start(element) {
        element.classList.add('anim-pulse');
    }

    /**
     * Stop animation
     * @param {HTMLElement} element
     */
    static stop(element) {
        element.classList.remove('anim-pulse');
    }
}
