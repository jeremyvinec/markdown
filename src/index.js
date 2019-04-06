import React from 'react';
import { render } from 'react-dom';
//CSS
import './style/css/bootstrap.min.css';
import './index.css';
// JS Perso
import { sampleText } from './sampleText';
// Marked.js
import marked from 'marked';

class App extends React.Component{

    state = {
        text: sampleText
    };

    componentWillMount(){
        const text = localStorage.getItem('text');
        if(text){
            this.setState({ text });
        }
    };

    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('text', nextState.text);
    };

    editText = (event) => {
        const text = event.target.value;
        this.setState({ text });
        console.log(text)
    };

    renderText = (text) => {
        const renderText = marked(text, {sanitize: true});
        return { __html:renderText };
    };

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <textarea rows="35" className="form-control" value={sampleText} onChange={(e) => this.editText(e)}/>
                    </div>
                    <div className="col-sm-6">
                        <div dangerouslySetInnerHTML={ this.renderText(this.state.text) }/>
                    </div>
                </div>
            </div> 
        )
    }
}

render(
    <App />,
    document.getElementById('root')
);