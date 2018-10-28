import React,{Component} from 'react'

class Scroll extends Component{
    render(){

        return (
            <div style={{overflowY:'scroll', height:'500px',width:'100%',textAlign:"center" }}>
                {this.props.children}
            </div>
        );

    }
}

export default Scroll;