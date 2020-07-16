import React, {Component} from "react";
import "./portfolio.css";

const TITLES = ["A Web Developer", " A Front End Developer", "A UI/UX Developer"];

export default class Header extends Component{

    state = { titleIndex: 0, faceIn: false};

    componentDidMount() {
        this.timeout = setTimeout(() => this.setState ({ fadeIn: false}), 2000);
        this.animateTitle();
    }

    componentWillMount(){
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateTitle = () => {
            this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex, fadeIn: true});
            this.timeout = setTimeout(() => this.setState({ fadeIn: false}), 2000);
            }, 4000);
    }
    render(){
        const { fadeIn, titleIndex } = this.state;
        const title = TITLES[titleIndex];

        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 jumbotron jumbotron-fluid bg-custom">
                        <img src="./mypic.png" alt="myImage" className="rounded-circle mb-3 img-center"/>
                        <h1 className="text-center text-white text-uppercase">Hi, I am Vivian</h1>
                        <h3 className="text-center text-white text-uppercase"> I am <span className = "text-warning">{title}</span></h3>
                    </div>
                </div>
            </div>
        )
    }
}