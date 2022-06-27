import {Dispatch} from "react";
import { Row, Button} from "react-bootstrap";

function Menu(props:{setContent:Dispatch<string>}) {
    return (
              <Row className="mx-0">
                <Button className="primary" value="employees" onClick={()=>props.setContent("emp")}>Pracownicy</Button>
                <Button variant="primary" value="departments" onClick={()=>props.setContent("dep")}>Działy</Button>        
            </Row>
    );
}

export default Menu;