import React, { Component } from 'react'

export default class FooterScreen extends Component {
    render() {
        return (
            <div className="footer">
                {/* <footer className="footer">All right reserved.</footer> */}
                <div className="col-lg-3">
<div className="widget">
<h3>Contact</h3>
<address>Vanilla Restaurant Langata 589, Nairobi</address>
<ul className="list-unstyled links mb-4">
<li><a href="tel://0728131955">+25428131955</a></li>

<li><a href="mailto://dianaiminza.99@gmail.com">[dianaiminza.99@gmail.com]</a></li>
</ul>
<h3>Connect</h3>
<ul className="list-unstyled social">
<li><a href="https://instagram.com/vanilla-restaurant"rel="noopener noreferrer"target="_blank">
    <i className="fa fa-instagram-square"aria-hidden="true"/>
</a></li>
<li><a href="tel://0728131955" rel="noopener noreferrer"target="_blank">
    <i className="fa fa-whatsapp-square"aria-hidden="true"/>
</a></li>

<li><a href="https://www.facebook.com/vanilla-restaurant/"rel="noopener noreferrer"target="_blank">
    <i className="fa fa-facebook-square"aria-hidden="true"/>
</a></li>
</ul>
</div> 
</div> 
            </div>
        )
    }
}
