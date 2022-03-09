import React, { Component } from "react";
import MyCard from "../../Components/MyCard";
import { Row, Col } from "react-bootstrap";
import MyLayout from "../../Components/MyLayout";
import Footer from "../../Components/MyFooter/index";

export default function HomePage() {
  return (
    <div>
      <MyLayout>
        <h1>HOME PAGE</h1>
      </MyLayout>
      <Footer />
    </div>
  );
}
