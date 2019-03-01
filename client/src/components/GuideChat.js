import React, { Component } from "react";


class Chat extends Component {

    state = {
        voyageID: "",
        chat: '',
        imformation: "",
        guideEmail: ""
    }
    // componentDidMount() {


    //     this.setState({ voayageID: _id  }, function () {
    //         API.getVoyage(this.state.uid).then(res => this.setState({ userName: res.data.name }, function () {

    //             API.getVoyages(this.state.uid)
    //                 .then(res => this.setState({ voyages: res.data }, function () {

    //                     voyageComponent = this.state.voyages.map(voyageObject =>
    //                         (<div className={voyageObject._id} onClick={API.getVoyage()}>
    //                             <h1 >{voyageObject.loction}</h1>
    //                             <p>{voyageObject.information.description}</p>
    //                         </div >
    //                         )
    //                     )
    //                     console.log(this.state.voyages)
    //                     this.forceUpdate();
    //                 }))

    //         }));
    //     });
    // }

    render() {
        return (
            <div>
                <h1 className="text-center" >Chat with Guide</h1>
            </div>
        )
    }
}

export default Chat