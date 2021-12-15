import react from "react";
import "./Card.css"

export default function Card(props){

    let future = (props.data.feature);
    return <div class="col-lg-3 col-md-6">
    <div class="card text-center card-shadow on-hover border-0 mb-4">
      <div class="card-body font-14">
     
       {props.data.pop ? <span class="badge badge-inverse p-2 position-absolute price-badge font-weight-normal">Popular</span> : <span></span>} 
     
        <h5 class="mt-3 mb-1 font-weight-medium">{props.data.basic}</h5>
        <h6 class="subtitle font-weight-normal">{props.data.team}</h6>
        <div class="pricing my-3">
          <sup>{props.data.sup}</sup>
          <span class="monthly display-5">{props.data.price}</span>
          <span class="yearly display-5">{props.data.price1}</span>
          <small class="monthly">/mo</small>
          <small class="yearly">/yr</small>
          <span class="d-block">Save <span class="font-weight-medium">$20</span> a Year</span>
        </div>
        <ul class="list-inline">

            {
              future.map((obj) => {
                  return <li>{obj.name}</li>
              })
            }
         
        </ul>
        <div class="bottom-btn">
       

          {props.data.pop ? <a class="btn btn-danger-gradiant btn-md text-white btn-block" href="#f1"><span>Choose Plan</span></a>: <a class="btn btn-success-gradiant btn-md text-white btn-block" href="#f1"><span>Choose Plan</span></a>}
        </div>
      </div>
    </div>
  </div>
}