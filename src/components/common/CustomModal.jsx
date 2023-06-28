import { Modal } from "antd";

const CustomModal = ({
  modalComponent,
  showModal,
  setShowModal,
  width = 400,
}) => {
  return (
    <Modal open={showModal} onCancel={() => setShowModal(false)} footer={null}>
      {modalComponent}
    </Modal>
  );
};

export default CustomModal;
