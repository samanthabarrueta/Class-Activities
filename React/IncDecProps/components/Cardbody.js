import React from "react";

const Cardbody = (props) => {
return <div className="card-body">
          <p className="card-text">Click Count: {props.count}</p>
          <button className="btn btn-primary" onClick={props.handleIncrement}>
            Increment
          </button>

          <button className="btn btn-primary" onClick={props.handleDecrement}>
            Decrement
          </button>
      </div>
}

export default Cardbody;