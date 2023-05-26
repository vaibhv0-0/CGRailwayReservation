import React from 'react';
class Home extends React.Component{
    render(){
        return(
            <div>
                <div/>
                <h1>Search for trains</h1>
                <form/>
                <label for="from">From:</label>
                <input type="text" id="from" name="from" required/>
                <label for="to">To:</label>
                <input type="text" id="to" name="to" required/>
                <label for="date">Travel date:</label>
                <input type="date" id="date" name="date" required/>
                <label for="class">Class:</label>
                <select id="class" name="class">
                <option value="1">First class</option>
                <option value="2">Second class</option>
                <option value="3">Third class</option>
                </select>
               <button type="submit">Search</button>
               <form/>
               </div>
            
        );
    }
}

export default Home;