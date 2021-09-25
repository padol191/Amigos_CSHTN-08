import "./Forum.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaAngleDoubleUp, FaComments } from "react-icons/fa";

const Forum = () => {
  const [info, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const get_post_url = "http://localhost:5000/api/post/";

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(get_post_url, {
        headers: {
          "x-auth-token": token,
        },
      })

      .then((res) => {
        setTimeout(() => {
          let demo = res.data;
          console.log(demo);
          setData(demo);
          console.log("ggnt", demo[0].title);
          setLoading(false);
        }, 1000);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [get_post_url]);

  const ForumBlocks = (props) => {
    return (
      <div className="forum">
        <div className="forum-list">
          <div className="forum-content">
            <img
              src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/43675/white-circle-emoji-clipart-xl.png"
              width="40px"
              style={{ display: "inline", float: "left" }}
              alt=""
            />
            <span>
              <h3>{props.title1}</h3>
            </span>
            <p className="author">By {props.name}</p>
            <p style={{ float: "left" }}>{props.desc}</p>
            <br />
            <div className="forum-button-div">
            <button
              className="forum-button"
            >
              <FaAngleDoubleUp
                style={{
                  fontSize: "12px",
                }}
              />
              <p>99</p>
            </button>
            <button className="forum-button">
              <FaComments
                style={{
                  fontSize: "12px",
                }}
              />
              <p>99</p>
            </button>

            </div>
            
          </div>
        </div>
      </div>
    );
  };

  

  let iconStyles = { color: "black" };
  return (
    <div>
      <div className="forum">
        <div className="heading">
          <h1>Forums</h1>
          <Link to="/create">
            <button>Create Discussion</button>
          </Link>
        </div>
        <div>
          {info &&
            info.map((data, index) => {
              return (
                <ForumBlocks
                  title1={data.title}
                  name={data.name}
                  desc={data.description}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Forum;
