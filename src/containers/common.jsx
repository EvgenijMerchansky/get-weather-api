import React ,{ Component } from 'react';
import { connect } from 'react-redux';

class Common extends Component {
  render(){
    console.log(this);
    const title = this.props.common.generalTitle;
    const date = this.props.common.infoTitle.date;
    const temp = this.props.common.infoTitle.temp;
    const weatherText = this.props.common.infoTitle.text;
    return (
      <div>
        <h1>Weather in: {title}</h1>
        <p>Date: {date}</p>
        <p>Temperature: {temp}</p>
        <p>Weather State: {weatherText}</p>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    common: state
  }
}

export default connect(mapStateToProps)(Common)
