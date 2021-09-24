import React from "react";
import "../MainContent/Subtopic.css";
import { useState, useEffect } from "react";
import { Link, Router } from "react-router-dom";
import axios from "axios";
import Quiz from "../MainContent/Quiz";
const NodeSubtopicDetails1 = () => {
  const [info, setData] = useState("");

  const topic_URL = "http://localhost:5000/api/subject/node/subtop";

  useEffect(() => {
    axios
      .get(topic_URL)
      .then((res2) => {
        console.log("working", res2.data.topic[0].subTopic[0].links[0].url);
        setData(res2.data.topic[0].subTopic[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const SubTop = (props) => {
    return (
      <div>
        <div className="subtopic-details">
          <h1>{props.title}</h1>
          <p>{props.body}</p>
          <img src={props.img} alt="" />
          <div className="additional-resources">
            <h2>Addition Resources</h2>
            <a href={props.link}>Click</a>
          </div>
          <h1>Test Your Knowledge</h1>
        </div>
        <Quiz />
      </div>
    );
  };
  return (
    <div>
      <SubTop title={info.title} body={info.body} img={info.fileUrl} />
    </div>
  );
};

export default NodeSubtopicDetails1;
