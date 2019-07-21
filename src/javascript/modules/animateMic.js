/**
 * Toggling animation on button click class
 * Basically adds and remove animation class defined in mic-animation
 */
export class AnimateMic {

    /**
     * Start animation
     * @param {element}
     */
    static start(element) {
        element.classList.add('anim-pulse');
    }

    /**
     * Stop animation
     * @param {element}
     */
    static stop(element) {
        element.classList.remove('anim-pulse');
    }
}