import React from "react";
import "../MainContent/Subtopic.css";
import { useState, useEffect } from "react";
import { Link, Router } from "react-router-dom";
import axios from "axios";

const ReactInfo = () => {
  const [info, setData] = useState("");
  let content = null;

  const topic_URL = "http://localhost:5000/api/subject/react";

  useEffect(() => {
    axios
      .get(topic_URL)
      .then((res2) => {
        console.log(res2.data.topic[0].subTopic[0]);
        setData(res2.data.topic[0].subTopic);
      })
      .catch((err) => console.log(err));
  }, []);

  const ReactTopics = (props) => {
    return (
      <div className="subtopic-main">
        <div className="subtopic-list">
          <Link
            to={{
              pathname: `/rsubtop1`,
              state: { id: props.id, data: info },
            }}
          >
            <button className="subtopic-links">
              <h2> {props.name}</h2>
              <br></br>
              {props.desc}
            </button>
          </Link>
        </div>
      </div>
    );
  };
  return (
    <div>
      {info &&
        info.map((data, index) => {
          return (
            <ReactTopics
              name={data.title}
              desc={data.description}
              id={data._id}
            />
          );
        })}
    </div>
  );
};
export default ReactInfo;
