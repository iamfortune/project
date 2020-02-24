import React from 'react';

class Table extends React.Component{

render() {
    return (
               
<div class="col-12 table-responsive mt-5">
  <table class="table pt-4">
        <thead>
        <tr>
            <th scope="col">Order#</th>
            <th scope="col">Item#</th>
            <th scope="col">Details</th>
            <th scope="col">Colors</th>
            <th scope="col">Qty</th>
            <th scope="col">Print Type</th>
            <th scope="col">Delivery Method</th>
            <th scope="col">Delivery Method</th>
            <th scope="col">Delivery Time</th>
            <th scope="col">Production Status</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td>
          <div class="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                  <label className="custom-control-label" for="customCheck1">1</label>
              </div>
            </td>
            <td>#835235783df37f78</td>
            <td>#835235783df37f78</td>
            <td className="item_fluid"><img src={require('./shirt_image_sm.png')} /><span>No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)</span></td> 
            <td><span className="badge badge-primary p-2">Royal</span></td>
            <td>LX4 </td>
            <td>DTG Print</td>
            <td className="item_fluid"><i className="fa fa-clock-o"></i> <span className="text-danger">Rush Shipping</span> </td>
            <td>
              <span>23 - June - 2019</span>
              <span>Time Left <em>10:00:00</em></span>
            </td>
            <td>Running 2 of 5</td>
            </tr>
            </tbody>
          </table>
    </div>

      )
}
    }
  
export default Table;
