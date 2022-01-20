import { useDispatch, useSelector } from "react-redux";
import { setAuthCardState, selectors as uiSelector } from "redux/uiSlice";
import Modal from "react-modal";
import AuthCard from "components/AuthCard";

const style = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "#ffffff00",
  },
};

Modal.setAppElement(document.getElementById("root"));

const AuthCardModal = ({ modalStyles = style }) => {
  const dispatch = useDispatch();

  const { authcard } = useSelector(uiSelector.getTheme);

  const closeModal = () => {
    dispatch(setAuthCardState(false));
  };

  return (
    <Modal
      isOpen={authcard}
      onRequestClose={closeModal}
      style={modalStyles}
      contentLabel="Junggl"
    >
      <AuthCard cardWidth="300px" />
    </Modal>
  );
};

export default AuthCardModal;
