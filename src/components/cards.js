import React from "react";
import { Link } from "react-router-dom";
import classes from "./cards.module.css";

const Card = (props) => {
  return (
    <div className={classes.cardBody}>
      {props.allData.map((data) => (
        <Link
          to={`/competition/${data.id}`}
          key={data.id}
          className={classes.link}
        >
          <div className={classes.column} key={data.id}>
            <div className={classes.card}>
              <div className={classes.imgdiv}>
                <img
                  src={data.emblemUrl}
                  className={classes.img}
                  alt="competition logo"
                />
              </div>
              <div className="mt-5">
                <p>{data.name}</p>
                <p>{data.area.name}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
