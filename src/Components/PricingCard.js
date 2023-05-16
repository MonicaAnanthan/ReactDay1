import React from "react";

export default function PricingCard(props) {
  return (
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">
          {props.data.plan}
        </h5>
        <h6 className="card-price text-center">
          {props.data.dollar}<span className="period">/month</span>
        </h6>
        <hr />
        <ul className="fa-ul">
          <li>
           {props.data.txt1}
          </li>
          <li>
            {props.data.txt2}
          </li>
          <li>
            {props.data.txt3}
          </li>
          <li>
            {props.data.txt4}
          </li>
          <li>
            {props.data.txt5}
          </li>
          <li>
            {props.data.txt6}
          </li>
          <li>
            {props.data.txt7}
          </li>
          <li>
            {props.data.txt8}
          </li>
        </ul>
        <div className="d-grid">
          <a href="#" className="btn btn-primary text-uppercase">
            Button
          </a>
        </div>
      </div>
    </div>
  );
}
