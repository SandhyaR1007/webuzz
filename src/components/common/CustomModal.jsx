import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  bgcolor: "#fff",
  borderRadius: "10px",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  p: 2,
  zIndex: 1000,
};

const CustomModal = ({ modalComponent, showModal, setShowModal }) => {
  return (
    <Modal
      open={showModal}
      onClose={() => setShowModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{modalComponent}</Box>
    </Modal>
  );
};

export default CustomModal;
