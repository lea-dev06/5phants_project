import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FadeIn from 'react-fade-in'


import { MdClose } from "react-icons/md";
import { IconContext } from "react-icons";




const PostForm = (props) => {



    return (
        <Col id="header" xl={12}>
        <header>
        <FadeIn delay='300' transitionDuration='800'>
          <Form>
            <Form.Row>
              <Col>
                <IconContext.Provider value={{ color: "#292b2c" }}>
                  <Button
                    type="button"
                    className="float-left ml-3 mt-5 bg-transparent border-0"
                    onClick={props.clearData}
                  >
                    <MdClose className="btn-close" />
                  </Button>
                </IconContext.Provider>
              </Col>
              <Col>
                <Button
                  type="button"
                  className="float-right mr-3 mt-5 btn-publish px-5 shadow"
                  onClick={props.publishData}
                >
                  Publish
                </Button>
              </Col>
            </Form.Row>
          </Form>
          </FadeIn>
        </header>
      </Col>
    )
}

export default PostForm;
