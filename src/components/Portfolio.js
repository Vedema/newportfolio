import React, { Component } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "Project-1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt animi officia velit. Ea in ullam, eum natus hic iste expedita voluptates voluptate impedit, neque, soluta quod! Iusto mollitia tempora autem.",
    image: "https://dummyimage.com/medrect",
  },
  {
    id: 2,
    title: "Project-2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt animi officia velit. Ea in ullam, eum natus hic iste expedita voluptates voluptate impedit, neque, soluta quod! Iusto mollitia tempora autem.",
    image: "https://dummyimage.com/medrect",
  },
  {
    id: 3,
    title: "Project-3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt animi officia velit. Ea in ullam, eum natus hic iste expedita voluptates voluptate impedit, neque, soluta quod! Iusto mollitia tempora autem.",
    image: "https://dummyimage.com/medrect",
  },
];

export default class Portfolio extends Component {
  render() {
    return (
      <div className="container">
        <div className="row card-deck">
          {PROJECTS.map((item, key) => {
            return (
              <div className="col-md-4 card bg-primary text-white" key={key}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-img-top"
                  style={{ width: "100%" }}
                />
                <div className="card-body">
                  <h3 className="card-title"> {item.title} </h3>
                </div>
                <div className="card-footer">
                  <p className="text-justify"> {item.description} </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
