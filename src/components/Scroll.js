import React,{Component} from 'react'

class Scroll extends Component{
    render(){

        return (
            <div style={{overflowY:'scroll', border:'5px solid black', height:'500px',textAlign:"center" }}>
                {this.props.children}
            </div>
        );

    }
}

export default Scroll;