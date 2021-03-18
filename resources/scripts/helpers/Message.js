import * as dayjs from "dayjs";
import Config from "../config";

export default class Message {
    constructor(type) {
        this.data = data();

        return Object.assign(this.data, {
            text: compile(Config.messages[type], this.data),
            type: type
        });
    }
}

const compile = (message, data) => {
    let placeholders = message.match(/<%(.*?)%>/g);

    placeholders.forEach((placeholder) => {
        let key = placeholder.replaceAll(/<%|%>/g, '');

        if (data[key]) {
            message = message.replaceAll(placeholder, data[key]);
        }
    });

    return message;
};

const data = () => {
    let date = dayjs();

    return {
        time: date.format('YYYY-MM-DD HH:mm:ss'),
        user: Config.user,
        unix: date.unix()
    }
};
