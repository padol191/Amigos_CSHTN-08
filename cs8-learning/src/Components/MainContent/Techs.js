import axios from "axios";
import "./Techs.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import withAuth from '../Authentication/withAuth';

const Techs = () => {
  const [info, setData] = useState("");
  let content = null;

  const topic_URL = "http://localhost:5000/api/topic/";

  useEffect(() => {
    axios
      .get(topic_URL)
      .then((res2) => {
        console.log(res2.data.topic);
        setData(res2.data.topic);
      })
      .catch((err) => console.log(err));
  }, []);

  //   if (info) {
  //     content = (
  //       <div>
  //         <div className="tech-list">
  //           <Link to="/react">
  //             <button className="tech-button">{info[0].name}</button>
  //           </Link>

  //           <Link to="/express">
  //             <button className="tech-button">{info[1].name}</button>
  //           </Link>

  //           <Link to="/mongo">
  //             <button className="tech-button">MongoDB</button>
  //           </Link>

  //           <Link to="/node">
  //             <button className="tech-button">Node</button>
  //           </Link>
  //         </div>
  //         <center>
  //           <div className="tech-list">
  //             <button className="get-started">Get Started</button>
  //           </div>
  //         </center>
  //       </div>
  //     );
  //   }
  const SubjectBlocks = (props) => {
    return (
      <div>
        <div className="tech-list">
          <Link to={`/${props.name}`}>
            <button className="tech-button">{props.name}</button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div>
      {info &&
        info.map((data, index) => {
          return <SubjectBlocks name={data.name} />;
        })}
    </div>
  );
};
export default Techs;
