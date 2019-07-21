
export const copy = () => {

    const copyBtn = document.querySelector('.copy-btn');

    copyBtn.addEventListener('click', copyText);
}

/**
 * Copy to clipboard function
 */
const copyText = (e) => {
    // const { toElement: element, } = e; // Get clicked element
    const content = document.querySelector('.words');

    /**
     * This gets a selection object, then creates a range where we select 
     * the contents our own div element which is editable.
     */
    const selection = window.getSelection();
    const range = document.createRange();

    range.selectNodeContents(content);
    selection.removeAllRanges(); // make sure that the global selection doesn’t contain any range yet
    selection.addRange(range); // add our new range to the selection

    document.execCommand('copy');
}