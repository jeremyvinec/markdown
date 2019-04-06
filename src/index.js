import React from 'react';
import { render } from 'react-dom';
//CSS
import './style/css/bootstrap.min.css';
import './index.css';
// JS Perso
import { sampleText } from './sampleText';

class App extends React.Component{

    state ={
        text: sampleText
    }

    editText = (event) => {
        const text = event.target.value;
        console.log(text);
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <textarea rows="35" className="form-control" value={sampleText} onchange={(e) => this.editText(e)}>

                        </textarea>
                    </div>
                    <div className="col-sm-6">
                        <div>
                            {sampleText}
                        </div>
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