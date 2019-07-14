export const copy = () => {

    const copyBtn = document.querySelector('.copy-btn');

    copyBtn.addEventListener('click', copyText);

}

const copyText = () => {
    const content = document.querySelector('.words');
    console.log(content.innerText);
}