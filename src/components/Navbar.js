import React, {Component} from "react";

//We can also write export default with the extends keyword instead of writing below the code.
export default class Navbar extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-sm bg-menu navbar-dark fixed-top">
                    <a href="#" className="navbar-brand">
                        Portfolio
                    </a>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Home</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}