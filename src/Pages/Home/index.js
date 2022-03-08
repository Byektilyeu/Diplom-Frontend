import React, { Component } from "react";
import MyCard from "../../Components/MyCard";
import { Row, Col } from "react-bootstrap";
import MyLayout from "../../Components/MyLayout";

export default function HomePage() {
  return (
    <MyLayout>
      <Row>
        <Col md="12">{/* <Intro /> */}</Col>
      </Row>
      <hr />
      <Row className="mb-1">
        <Col md="3">
          <MyCard />
        </Col>
        <Col md="3">
          <MyCard />
        </Col>
        <Col md="3">
          <MyCard />
        </Col>
        <Col md="3">
          <MyCard />
        </Col>
        <Col md="3">
          <MyCard />
        </Col>
        <Col md="3">
          <MyCard />
        </Col>
        <Col md="3">
          <MyCard />
        </Col>
        <Col md="3">
          <MyCard />
        </Col>
        <Col md="3">
          <MyCard />
        </Col>
        <Col md="3">
          <MyCard />
        </Col>
        <Col md="3">
          <MyCard />
        </Col>
        <Col md="3">
          <MyCard />
        </Col>
      </Row>
    </MyLayout>
  );
}
