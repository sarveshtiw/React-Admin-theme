import Reflux from 'reflux'

let InboxActions = Reflux.createActions({
    init: {asyncResult: true},
});

InboxActions.init.listen(function () {
    $.getJSON('api/inbox/inbox.json')
        .then(this.completed, this.failed)
});


export default InboxActions


