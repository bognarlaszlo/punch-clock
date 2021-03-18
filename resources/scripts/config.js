const env = 'production';

const Config = {
    development: {},
    production: {
        endpoint: '',
        user: '',
        thread: '',
        messages: {
            login: '<%user%> *login* _<%time%>_',
            logout: '<%user%> *logout* _<%time%>_',
            lunch: '<%user%> *logout ebed* _<%time%>_',
            leave: '<%user%> *logout* _<%time%>_',
        }
    }
}

export default Config[env];
