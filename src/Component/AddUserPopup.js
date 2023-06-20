import React from "react";
import { Modal } from "react-bootstrap";
import AddUser from "./AddUser";
import "bootstrap/dist/css/bootstrap.min.css";

const AddUserPopup = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      
      <Modal.Body>
        <AddUser />
      </Modal.Body>
    </Modal>
  );
};

export default AddUserPopup;
