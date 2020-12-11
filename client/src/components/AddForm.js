import React from 'react';

import { connect } from 'react-redux';

import {  fetchSmurfs, addSmurf, setErrorText } from './../actions';
import SmurfDisplay from './SmurfDisplay';

class AddForm extends React.Component {

    state = {
        name: "",
        position: "",
        nickname: "",
        description: ""
    }

    handleChange = (e) => {
        var name = e.target.getAttribute('name');
        this.setState({
            ...this.state,
            [name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const nam = this.state.name;
        const pos = this.state.position;
        const nick = this.state.nickname;
        const des = this.state.description;
        if (!nam || !pos || !nick) {
            this.props.setErrorText("Name, nickname, and position are required.");
        } else {
            this.props.addSmurf(nam, pos, nick, des);
            this.props.fetchSmurfs();
        }
        this.setState({
            name: "",
            position: "",
            nickname: "",
            description: ""
        })
    }

    render() {
        let loadingMessage;
        if (this.props.isLoading){
            loadingMessage = <p>Loading</p>;
        } else {
            loadingMessage = <></>;
        }

        // let errorMessage;
        // if (this.props.error){
        //     errorMessage = <p>{this.props.error}</p>;
        // } else {
        //     errorMessage = <></>;
        // }
        return(<section>
            <h2>Add Smurf</h2>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input value={this.state.name} onChange={this.handleChange} name="name" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Position:</label><br/>
                    <input value={this.state.position} onChange={this.handleChange} name="position" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Nickname:</label><br/>
                    <input value={this.state.nickname} onChange={this.handleChange} name="nickname" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Description:</label><br/>
                    <input value={this.state.description} onChange={this.handleChange} name="description" id="name" />
                </div>
                {
                    this.props.smurfFormErrorMessage ? <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {this.props.smurfFormErrorMessage}</div> : null
                }
                <button>Submit Smurf</button>
            </form>
            {loadingMessage}
            <SmurfDisplay />
        </section>);
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        smurfFormErrorMessage: state.smurfFormErrorMessage
    }
}

export default connect(mapStateToProps, {fetchSmurfs, addSmurf, setErrorText})(AddForm);

// export default AddForm;

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.