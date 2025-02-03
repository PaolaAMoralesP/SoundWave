
import Circle1 from "../../Circles/Circle1";
import Circle2 from "../../Circles/Circle2";
import Input_form from "../../Input_form/Input_form";
import "./main_join.css"



function Main_Join() {
  return (
    <main>
      <Circle1 />
      <Circle2 />
      <div className="content-main">
        <div className="content-text">
          <h3>
            Join the <span className="highlight">fun.</span>
          </h3>
        </div>
        <div className="form-section">
          <Input_form />
        </div>
      </div>
    </main>
  );
}

export default Main_Join;


