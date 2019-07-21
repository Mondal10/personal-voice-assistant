import { AnimateMic } from './animateMic';

/**
 * Speech Recognition code
 */
export const speech = () => {
    let speakingFinished = false;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    const speakBtn = document.querySelector('.speak-btn');
    const stopBtn = document.querySelector('.stop-btn');

    const micIcon = document.querySelector('.svg-holder');

    recognition.interimResults = true;
    recognition.lang = 'en-US';

    let paragraph = document.createElement('p');
    const words = document.querySelector('.words');
    words.appendChild(paragraph);

    recognition.addEventListener('result', e => {
        // If IE gives error then use Array.from()
        const transcript = [...e.results]
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');
        paragraph.textContent = transcript;

        if (e.results[0].isFinal) {
            paragraph = document.createElement('p');
            words.appendChild(paragraph);
        }

        if (transcript.includes('hello')) {
            console.log('unicorn 🦄');
        }

        const poopScript = transcript.replace(/poop|poo|shit|dump|unicorn/gi, '💩');
        paragraph.textContent = poopScript;

        // console.log(transcript);
    });

    // When there is a long pause the speech recognition stops (Default configuration of API), 
    // so we need to start again when end.
    recognition.addEventListener('end', () => {
        speakingFinished ? recognition.stop() : recognition.start();
    });

    speakBtn.addEventListener('click', () => {
        speakingFinished = false;
        recognition.start();
        AnimateMic.start(micIcon);
        speakBtn.classList.add('disabled');
        stopBtn.classList.remove('disabled');
    });

    stopBtn.addEventListener('click', () => {
        speakingFinished = true;
        recognition.stop();
        AnimateMic.stop(micIcon);
        speakBtn.classList.remove('disabled');
        stopBtn.classList.add('disabled');
    });
}