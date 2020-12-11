import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';

import {  fetchSmurfs, addSmurf, setErrorText } from './../actions';

export class SmurfDisplay extends React.Component {
    state = {
        smurfsFetched: []
    }

    componentDidMount() {
        this.setState({smurfsFetched: this.props.fetchSmurfs()});
        console.log(this.props.fetchSmurfs());
    }

    render() {
        const { smurfs } = this.props;
        console.log(this.props.smurfs[0]);
        let smurfsArray = [];
        if (smurfs[0]){
            smurfsArray = smurfs[0];
        }
        // let loadingMessage;
        //     if (this.props.isLoading){
        //         return(<div><p>Loading</p></div>);
        //     } else {
        //         return(<div>
        //             {
        //                 smurfs.map((smurf, index) => {
        //                     <Smurf />
        //                 })
        //             }
        //             </div>
        //         );
        //     }
        return(<div>
                {
                    smurfsArray.map((smurf, index) => {
                        return <Smurf key={Math.random()} smurf={smurf} />
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs
    }
           // return(<div>
            
        // </div>)
// {
//     smurfs: [],
//     isLoading: false,
//     error: ""
// }
//     return {
//       videos: state.youtubeReducer.videos,
//       isFetching: state.youtubeReducer.isFetching,
//       error: state.youtubeReducer.error
//     };
};

export default connect(mapStateToProps, {fetchSmurfs, addSmurf, setErrorText})(SmurfDisplay);

// export default SmurfDisplay;

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.