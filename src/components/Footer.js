import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <h3 className="text-center">Locate Me</h3>
            {/* Remove the style and width then use include {} around the property values. Also remove the width*/}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4925.649102247093!2d0.8101991264094396!3d51.882415091474265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d902fd5de06307%3A0xf5f5f689319430df!2sStanway%2C%20Colchester!5e0!3m2!1sen!2suk!4v1594791031163!5m2!1sen!2suk" height={"300"}frameborder={"0"} 
           allowfullscreen={""}aria-hidden={"false"}tabindex={"0"}></iframe>     
          </div>
          <div className="col-md-3">
          <h3 className="text-center">Reviews</h3>
           <iframe height={"315"}src={"https://www.youtube.com/embed/zhIkAcFPnLY"} frameborder={"0"}allow={"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}allowfullscreen></iframe>
          </div>
          <div className="col-md-6">
            <form method="post">
              <fieldset>
                <legend className="text-center">Contact Us</legend>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    name="name"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    required
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    required
                    cols="30"
                    rows="5"
                    className="form-control"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input type="submit" value="Send" className="btn btn-info" />
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
