import Quiz from "./Quiz";
import "./SubtopicDetails.css";

const SubtopicDetails = (props) => {
  const { id, data } = props.location.state;
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
    data &&
    data.map((data) => {
      return (
        <SubTop
          title={data.title}
          body={data.body}
          img={data}
          link={data.links[0]}
        />
      );
    })
  );
};

export default SubtopicDetails;
