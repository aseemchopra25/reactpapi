import React, {Component} from 'react';
import './Api.css'
class Api extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded:false,
        }
    }

    componentDidMount() {
        // API CALL using Fetch method 
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json 
                })
            });
    }
    render(){

        var { isLoaded, items} = this.state 

        if(!isLoaded){
            return <div>Loading...</div>
        }
        else {
            return (
                <div className="Api">
                    <ul>
                        {items.map (item =>(    
                            <li key={item.id}>
                                Name:{item.name} | Email: {item.email}
                            </li>
                        ))};
                    </ul>
                </div>
            );

        }

        
    }
}
export default Api

