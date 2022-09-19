import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import "./Item.css";

const Item = ({ info }) => {
  return (
    <div>
      <Card
        body
        style={{
          width: "18rem",
        }}
      >
        <img alt={info.alt} src={info.image} className="card-img-top" />
        <CardBody className="text-center gap-2">
          <CardTitle tag="h5">{info.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h5">
            Precio: ${info.price}
          </CardSubtitle>

          <Link to={`/item/${info.id}`}>
            <Button color="dark">Ver detalle</Button>
          </Link>
          <CardText className="text-success">
            Stock: {info.stock} unidades
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Item;
