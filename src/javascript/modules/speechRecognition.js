/**
 * Speech Recognition code
 */
export const speech = () => {
    let speakingFinished = false;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    const speakBtn = document.querySelector('.speak-btn');
    const stopBtn = document.querySelector('.stop-btn');

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

        console.log(transcript);
    });
    console.log(recognition, stopBtn)
    // When there is a long pause the speech recognition stops, 
    // so we need to start again when end.
    speakingFinished ? null : recognition.addEventListener('end', recognition.start);
    console.log(speakingFinished);
    speakBtn.addEventListener('click', () => {
        speakingFinished = false;
        recognition.start();
    });

    // Stop Button Not working Need to work on it
    stopBtn.addEventListener('click', () => {
        speakingFinished = true;
        recognition.stop();
    });
}