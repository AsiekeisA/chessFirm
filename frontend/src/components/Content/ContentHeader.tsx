import { Row, Col } from "react-bootstrap"

export default function ContentHeader(props:{contentChange:string}) {
    switch(props.contentChange) {
        case "emp":
            return (
                <Row>
                    <Col>Imię</Col>
                    <Col className="col">Nazwisko</Col>
                    <Col className="col">Numer Telefonu</Col>
                </Row>)
        case "dep":
            return(<div>departmentHeadeer</div>)
        default:
            return (<div>CotentHeader change Error</div>)
    }
}