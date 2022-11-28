import React from 'react';
import "../src/Admin.css";




class Details extends React.Component {
    

    render() {
        
        return (
            <div class="col-container">
                
  <div className="col">
    <h2>John</h2>
    <h3>Cardiology</h3>
    <h3>MBBS</h3>
  </div>

  <div className="col">
    <h2>Ravishankar</h2>
    <h3>Orthology</h3>
    <h3>MBBS,MD</h3>
  </div>

  <div className="col">
    <h2>Divya</h2>
    <h3>Gastrology</h3>
    <h3>BSc,MBBS</h3>
  </div>

</div>
               
        )
    }
}
export default Details;