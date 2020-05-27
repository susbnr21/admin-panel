import React, { Component } from 'react';
import M from 'materialize-css'; 
import { Button } from 'react-bootstrap';

class MoreDetails extends Component{
    state = {
        vehicle: []
    };

    componentDidMount() {
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, {inDuration: 300, outDuration: 225});
    }

    render(){
        return(
            <div>
                <td>
                    <Button className="btn modal-trigger" href="#modal1">More Details</Button>
                </td>
                <form id="modal1" className="modal">
                    <div className="modal-content" style={{height: 400}}>
                    <div className="row">
                    
                    <div>
                        <div className="input-field col s6">
                            <input disabled value="Small Truck" id="disabled" type="text" className="validate"/>
                            <label for="disabled">Truck Size</label>
                        </div>
                    </div>

                    </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default MoreDetails