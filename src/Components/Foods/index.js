import React, { Component } from "react";
import axios from "axios";
import Spinner from "../Spinner/index";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import food from "../../assets/food.jpg";
import { Row, Col } from "react-bootstrap";
import MyLayout from "../../Components/MyLayout";

export default class Foods extends Component {
  state = {
    error: null,
    loading: false,
    foods: [],
  };

  componentDidMount() {
    console.log(document.cookie);

    document.cookie =
      "limit=; expires=" + new Date(Date.now() - 360 * 24 * 60 * 60 * 1000);

    this.setState({ loading: true });

    // cookie-gees limit-iig unshij avna
    axios
      .get("http://localhost:8000/api/v1/foods")
      .then((result) =>
        this.setState({ loading: false, foods: result.data.data })
      )
      .catch((err) => this.setState({ loading: false, error: err.response }));
  }

  render() {
    return (
      <MyLayout>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div>
            <hr />

            <Row md="12">
              {this.state.foods.map((el) => (
                <Col md="3">
                  <Link
                    to={`/foods/${el._id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Card
                      className={`fj-card`}
                      style={{ marginBottom: "20px" }}
                    >
                      <div className="card-body-wrapper">
                        <div className="view overlay">
                          <Card.Img src={food} alt="" />
                        </div>
                        <Card.Body>
                          <Card.Title className="card-main-title">
                            {el.name}
                          </Card.Title>
                          <Card.Text>{el.content}</Card.Text>
                        </Card.Body>
                      </div>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </MyLayout>
    );
  }
}
