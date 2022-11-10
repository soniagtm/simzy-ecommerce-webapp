import React from "react";
import styled from "styled-components";
import { MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import AdSidebar from "../components/AdSidebar";
import AdNavbar from "../components/AdNavbar";
import AdDataTable from "../components/AdDataTable";
const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;
const ListContainer = styled.div`
  margin-top: 10px;
  flex: 6;
`;
const Title = styled.h2`
  width: 100%;
  margin: 30px;
  color: black;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AdOrder = () => {
  return (
    <Container>
      <AdSidebar />
      <ListContainer>
        <AdNavbar />
        <Title>Order List</Title>
        <AdDataTable />
      </ListContainer>
    </Container>
  );
};

export default AdOrder;