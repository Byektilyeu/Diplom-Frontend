import React, { Component } from "react";
import axios from "../../axios";
import MyLayout from "../MyLayout";

import Alert from "react-bootstrap/Alert";

export default class FoodDetail extends Component {
  state = {
    name: null,
    photo: null,
    author: null,
    rating: null,
    content: null,
    steps: null,
    calorie: null,
    bestseller: false,
    success: null,
    deleted: null,
    loading: false,
  };

  handleType = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
      error: null,
      success: null,
    });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  componentDidMount() {
    console.log(
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      this.props.match.params.id
    );
    this.setState({ loading: true });
    axios
      .get("foods/" + this.props.match.params.id)
      .then((result) =>
        this.setState({ ...result.data.data, error: null, loading: false })
      )
      .catch((err) =>
        this.setState({ error: err.response.error.message, loading: false })
      );
  }

  handleSave = () => {
    // const token = localStorage.getItem("token");
    this.setState({ loading: true, success: null });
    axios
      .put("foods/" + this.props.match.params.id, {
        name: this.state.name,
        photo: this.state.photo,
        author: this.state.author,
        rating: this.state.rating,
        content: this.state.content,
        steps: this.state.steps,
        calorie: this.state.calorie,
      })
      .then((result) => {
        console.log(result);
        this.setState({
          ...result.data.data,
          error: null,
          loading: false,
          success: "Амжилттай хадгалагдлаа",
        });
      })
      .catch((err) => {
        this.setState({
          error: err.response.data.error.message,
          loading: false,
        });
      });
  };

  handleDelete = () => {
    // const token = localStorage.getItem("token");
    this.setState({ loading: true, success: null });
    axios
      .delete("foods/" + this.props.match.params.id)
      .then((result) => {
        this.setState({
          deleted: true,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.response.data.error.message,
          loading: false,
        });
      });
  };

  render() {
    if (this.state.deleted) {
      return <div>Хоол амжилттай устгагдлаа</div>;
    }

    return (
      <MyLayout>
        {this.state.error && <div>{this.state.error}</div>}

        {this.state.success && (
          <div>
            <Alert
              variant="success"
              style={{
                width: "22rem",
              }}
            >
              <Alert.Heading>{this.state.success}</Alert.Heading>
            </Alert>
          </div>
        )}
        <div>
          <div>
            <div>
              <label>Нэр</label>
              <input
                name="name"
                value={this.state.name}
                onChange={this.handleType}
              />
            </div>
            <div>
              <label>Тайлбар</label>
              <textarea
                style={{ height: "20em" }}
                name="content"
                value={this.state.content}
                onChange={this.handleType}
              />
            </div>

            <div>
              <label>rating</label>
              <input
                name="rating"
                value={this.state.rating}
                onChange={this.handleType}
              />
            </div>

            <div>
              <button onClick={this.goBack}>Буцах</button>
              &nbsp;
              <button onClick={this.handleSave}>Хадгалах</button>
              &nbsp;
              <button onClick={this.handleDelete}>Устгах</button>
            </div>
          </div>
        </div>
      </MyLayout>
    );
  }
}
