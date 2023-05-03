import React from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const Home = () =>{
    return (
      <Container>
        <h2 style={{textAlign : 'center', margin : '20px auto', fontFamily : 'fantasy', }}>TOURS</h2>
        <Table className="table table-hover table-bordered ">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Rohan</td>
              <td>Rao</td>
              <td>@RR</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Vishwanath</td>
              <td>Reddy</td>
              <td>@VR</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Ganesh</td>
              <td>Unkal</td>
              <td>@GU</td>
            </tr>
            <tr>
              <td>4</td>
              <td>John</td>
              <td>Cena</td>
              <td>@UCSM</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
}

export default Home