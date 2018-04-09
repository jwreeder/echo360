import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Label(props) {
    let lbl = props.value?"You selected " + props.value:"Make a selection"
    return(
        <div className="btn-value">{lbl}</div>
    )
}

function Option(props) {
    return (<div className="option">
	    <label><input
	    className="radio-btn"
	    type="radio"
	    name="choices"
	    value={props.value}
	    onClick={props.onClick}
	    checked={props.checked}>
	    </input>{props.label}</label>
	    </div>)
}

class Wrapper extends React.Component {
    constructor(props) {
	super(props)
	this.state = {
	    currentOpt: null,
	}
    }

    handleClick(i) {
	this.setState({
	    currentOpt: i,
	})
    }

    renderOption(i, l, c) {
	return <Option
	key={i}
	value={i}
	label={l}
	checked={c}
	onClick={() => this.handleClick(i)}/>
    }

    render() {
	const opts = this.props.options
	const inputs = opts.map((obj, idx) => {
	    return this.renderOption(obj.value, obj.label, this.state.currentOpt === obj.value?true:false)
	})

	return(<div className="outer"><div className="options">
	       {inputs}
	       </div>
	       <div className="option-value-selected">
	       <Label value={this.state.currentOpt}/>
	       </div></div>)
    }
}

const options = [
    { label: 'Label 1', value: 1},
    { label: 'Label 2', value: 2},
    { label: 'Label 3', value: 3},
    { label: 'Label 4', value: 4},
]

ReactDOM.render(
	<Wrapper options={options}/>,
    document.getElementById('root')
);
