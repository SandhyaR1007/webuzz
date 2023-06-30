import { ConfigProvider, Modal, theme } from "antd";
import { useSelector } from "react-redux";
import { themeSelector } from "../../app/features/themeSlice";

const CustomModal = ({ modalComponent, showModal, setShowModal }) => {
  const { theme: currentTheme } = useSelector(themeSelector);
  return (
    <ConfigProvider
      theme={{
        algorithm:
          currentTheme && currentTheme === "dark"
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,
      }}
    >
      <Modal
        centered={true}
        open={showModal}
        onCancel={() => setShowModal(null)}
        footer={null}
      >
        {modalComponent}
      </Modal>
    </ConfigProvider>
  );
};

export default CustomModal;
