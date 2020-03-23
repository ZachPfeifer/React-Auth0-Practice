import React, { Component } from 'react'


export default class AccountDetails extends Component {
   
    state={
        isOpen: false
        }

    render() {
        let dialog=(
          <div className="dialog-container">
            <div>{this.props.children}</div>
            <small>
            <p className="dialog__close-btn font-italic text-muted  d-flex justify-content-center" onClick={this.props.onClose}>Close Details</p>
            </small>
          </div>
         )

         if(!this.props.isOpen){
             dialog= null
         }
             return (
                 <div>
                     {dialog}
                 </div>
             )
         
       
    }
}
