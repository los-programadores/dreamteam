import React, { Component } from "react";


class Chat extends Component {
    componentDidMount() {
        const voyageIDFromURL = this.props.match.params.voyageID;
        if (typeof voyageIDFromURL !== 'undefined') {
            console.log(voyageIDFromURL);
        };
    };

    componentDidUpdate(prevProps) {
        if (this.props.userID !== prevProps.userID) {
            const voyageID = this.props.match.params.voyageID;
            console.log(voyageID);
        };
    };


    render() {
        return (
            <div>
                <h1 className="text-center" >Chat with Guide</h1>
            </div>
        )
    }
}

export default Chat