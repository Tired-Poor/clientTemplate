import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div id='contactBody'>
            <div>
                {/* <nav><img></img>
                    <ul>
                        <li>Hello</li>
                    </ul>
                </nav> */}
                <h1>Contact</h1>
            </div>
            <div id='contactContainer'>
                <div id='contactPhoto'>
                    <img src='https://images.pexels.com/photos/11731143/pexels-photo-11731143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>
                </div>
                <form id='contactForm'>
                    <div className='group'>
                        <label>Name:</label>
                        <div className='name'>
                            <input placeholder='First Name'></input>
                            <input placeholder='Last Name'></input>
                        </div>
                    </div>
                    <div className='group'>
                        <label>Email:</label>
                        <input></input>
                    </div>
                    <div className='group'>
                        <label>Subject / Order #:</label>
                        <input></input>
                    </div>
                    <div className='group'>
                        <label>Message:</label>
                        <textarea></textarea>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact