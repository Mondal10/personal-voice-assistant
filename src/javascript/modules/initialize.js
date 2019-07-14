import { copy } from './copy'
import { speech } from './speechRecognition';

/**
 * Initializing everything here
 */
export const init = () => {

    copy();
    speech();
}