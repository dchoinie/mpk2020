import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Accordion from "react-bootstrap/Accordion"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

export default () => {
  return (
    <Layout>
      <PageTitle title="F.A.Q." />
      <Accordion className="px-2 lg:px-0">
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              className="text-left"
              eventKey="0"
            >
              Can I Buy Tickets At The Door?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              If we have seats left you can definitely buy tickets at the door,
              we recommend buying them online to avoid missing out. Our shows
              often sell out!
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              className="text-left"
              eventKey="1"
            >
              How Long Is The Mini Pop Kids Show?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Our show typically lasts an hour and half.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              className="text-left"
              eventKey="3"
            >
              What Songs Will The Kids Be Performing?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              The Mini Pop Kids perform songs off of MPK 14, 15, 16, and of
              course MPK 17!
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              className="text-left"
              eventKey="4"
            >
              Do I Need To Buy Tickets For Babies/Toddlers?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              Tickets are required for everyone above the age of 2 years old.
              Children under 2 years old are at the discretion of the venue,
              please contact them directly.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              className="text-left"
              eventKey="5"
            >
              Do You Accept Debit/Credit For Merchandise?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              Yes, we accept Credit &amp; Debit at our merchandise table, debit
              cards need to have tap enabled.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              className="text-left"
              eventKey="6"
            >
              How Do I Redeem My VIP Tickets?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="6">
            <Card.Body>
              VIP Instructions Can Be Found{" "}
              <Link to="/vip-process" className="pink">
                Here.
              </Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              className="text-left"
              eventKey="8"
            >
              What Merchandise Is Available At The Show?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="8">
            <Card.Body>
              We have T-Shirts, Sweaters, CD’s, &amp; Glow Microphones available
              at our merch table at each show. All clothing comes in youth sizes
              extra small to extra large, availability may vary for each show.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Layout>
  )
}
