
import React, { Component } from 'react';
class App extends Component {
    render() {
       return (       <div>
        <nav className="light-blue darken-4">
            <div className="container">
               <a className="brand-logo" href="/">MERN 
               Stack</a>
            </div>
        </nav>

    <div className="container">
       <div className="row">
        <div className="col s5">
            <div className="card">
                <div className="card-conten">
                    <form onSubmit={this.addTask}>
                        <div className="row">
                            <div 
                            className="input-field col s12">
                                <input type="text" placeholder="Task Title"/>
                            </div>
                        </div>
                        <div className="row">
                            <div 
                            className="input-field col s12">
                                <textarea placeholder="Task Description"
                                className="materialize-textarea">
                                </textarea>
                            </div>
                        </div>
                        <button className="btn light-blue
                        darken-4">
                            Send
                        </button>
                    </form>
                </div>
        </div>
        <div className="cols7">

        </div>

       </div>
    </div>
</div>
</div>
   )
       }
}


export default App;