import React from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import EditUser from "./EditUser";

const EditUserPopup = ({ show, handleClose, userId }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditUser userId={userId} />
      </Modal.Body>
    </Modal>
  );
};

export default EditUserPopup;
