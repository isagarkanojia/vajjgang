import React from 'react'
import CardList from './CardList'
import {vajjgang} from './vajjgang';


const App = ()=>{
    return (
            <div>  
                
                <h1>$$Vajj Gang$$</h1>
                 <CardList vajjgang={vajjgang}/>
                 
                 
            </div>
            
        );
}

export default App;