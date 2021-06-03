import React from "react";
import "./Blogs.css";
import trainML_img from "../../images/trainML.png";
import restapi_img from "../../images/restapi.png";
import reactjsfrontend_img from "../../images/reactfontend.png";
import cleanormessy_img from "../../images/cleanormessy.png";

const Blogs = () => {
  return (
    <div className="blogs">
      <div className="blogs__heading">
        <h1>Blogs</h1>
      </div>

      <div className="blogposts">
        <a href="https://medium.com/deepklarity/building-a-reactjs-front-end-to-interact-with-a-machine-learning-model-104b4fc8904d">
          <div className="blog__card">
            <img src={reactjsfrontend_img} />
            <div className="blog__content">
              <span>Oct 8, 2020</span>
              <span>Frontend</span>
              <h3>
                Building a Reactjs front-end to interact with a Machine Learning
                model
              </h3>
            </div>
          </div>
        </a>
        <a href="https://medium.com/deepklarity/building-a-rest-api-using-flask-to-deploy-a-machine-learning-model-on-a-back-end-server-a9645dbc8b6f">
          <div className="blog__card">
            <img src={restapi_img} />
            <div className="blog__content">
              <span>Oct 8, 2020</span>
              <span>REST API</span>
              <h3>
                Building a REST API using Flask to deploy a Machine Learning
                Model on a back-end server
              </h3>
            </div>
          </div>
        </a>

        <a href="https://medium.com/deepklarity/training-an-ml-classifier-model-fa346a51a31a">
          <div className="blog__card">
            <img src={trainML_img} />
            <div className="blog__content">
              <span>Oct 8, 2020</span>
              <span>Machine Learning</span>
              <h3>Training an ML classifier model</h3>
            </div>
          </div>
        </a>
        <a href="https://medium.com/deepklarity/clean-or-messy-classifier-f7d81757be27">
          <div className="blog__card">
            <img src={cleanormessy_img} />
            <div className="blog__content">
              <span>Oct 8, 2020</span>
              <span>Web Application</span>
              <h3>Clean or Messy Classifier</h3>
            </div>
          </div>
        </a>
      </div>

      {/* <div className="blogposts">
        <a href="https://medium.com/deepklarity/building-a-reactjs-front-end-to-interact-with-a-machine-learning-model-104b4fc8904d">
          <div className="row">
            <FaMedium />

            <p>
              Building a Reactjs front-end to interact with a Machine Learning
              model
            </p>
          </div>
        </a>
        <a href="https://medium.com/deepklarity/building-a-rest-api-using-flask-to-deploy-a-machine-learning-model-on-a-back-end-server-a9645dbc8b6f">
          <div className="row">
            <FaMedium />

            <p>
              Building a REST API using Flask to deploy a Machine Learning Model
              on a back-end server
            </p>
          </div>
        </a>
        <a href="https://medium.com/deepklarity/training-an-ml-classifier-model-fa346a51a31a">
          <div className="row">
            <FaMedium />

            <p>Training an ML classifier model</p>
          </div>
        </a>
        <a href="https://medium.com/deepklarity/clean-or-messy-classifier-f7d81757be27">
          <div className="row">
            <FaMedium />

            <p>Clean or Messy Classifier</p>
          </div>
        </a>
      </div> */}
    </div>
  );
};

export default Blogs;
