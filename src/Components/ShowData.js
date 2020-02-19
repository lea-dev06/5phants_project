import React from 'react';
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { ListOfCurrencies } from '../Fixtures/DATA';


const ShowData = (props) => {

    let DATEANDTIME;
    console.log(JSON.stringify(props.DATAS.posted_at_date))
    if (props.DATAS.posted_at_date) {
    const DATE = JSON.stringify(props.DATAS.posted_at_date).slice(1, 11)
    const TIME = JSON.stringify(props.DATAS.posted_at_date).slice(12, 17)
    DATEANDTIME = `Item was posted at ${TIME} ${DATE}`
    }
 
  return (
    <div>
      <Modal show={props.showData} onHide={props.clearData}>
        <Card className="card-result shadow">
          <Card.Header>{props.DATAS.title}</Card.Header>
          <Card.Img variant="top" src={props.DATAS.image} />
          <Card.Body>
            <Card.Text>{DATEANDTIME}</Card.Text>
            <Card.Text><b>{props.DATAS.product}</b></Card.Text>
            <Card.Text className="text-dark">{props.DATAS.description}</Card.Text>
            <Card.Text className="no_offer_price">{`${ListOfCurrencies[props.DATAS.id_price_currency].name} ${props.DATAS.no_offer_price}`}</Card.Text>
            <Card.Text className="price">{`${ListOfCurrencies[props.DATAS.id_price_currency].name} ${props.DATAS.price}`}</Card.Text>
          </Card.Body>
        </Card>
      </Modal>
    </div>
  )
}

export default ShowData;
