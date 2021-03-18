import Config from "./config";
import Message from "./helpers/Message";

document.addEventListener('click', (event) => {
    const target = event.target;

    if ('chat' in target.dataset) {
        Chat(target.dataset.chat);
    }
});

const Chat = (type) => {
    let message = new Message(type);

    fetch(Config.endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            text: message.text,
            thread: {
                name: Config.thread
            }
        })
    }).then(() => {
    });
}
