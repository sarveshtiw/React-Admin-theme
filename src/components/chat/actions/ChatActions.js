
import Reflux from 'reflux'

let ChatActions = Reflux.createActions({
    init: {asyncResult: true},
    messageTo: {asyncResult: false},
    messageUpdate: {asyncResult: false},
    send: {asyncResult: false}
});

ChatActions.init.listen( function() {
    $.getJSON('api/chat.json')
        .then( this.completed, this.failed )
});

export default ChatActions

