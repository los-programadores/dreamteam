import React, { Component } from "react";


class Chat extends Component {

    state = {
        voyageID: "",
        chat: '',
        imformation: "",
        guideEmail: ""
    }

    render() {
        return (
            <div>
                <h1 className="text-center" >Chat with Guide</h1>
            </div>
        )
    }
}

export default Chat