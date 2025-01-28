import React from "react";
import downarrow from "../assets/downarrow.png";

const DropDown = ({ setTags }) => {
  const [options, setOptions] = useState(["Urgent", "Important"]);
  const [selected, setSelected] = useState("null");
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOption = (option) => {
    setSelected(option);
    setIsOpen(false);
  };
  return (
    <div className="tag-new rounded-2 py-4 px-5 position-relative">
      <h3 className="position-absolute">Tags</h3>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-5">
          <p className="m-0 py-1 px-2 rounded-1">Urgent</p>
          <p className="m-0 py-1 px-2 rounded-1">Important</p>
        </div>
        <img src={downarrow} alt="" />
      </div>
    </div>
  );
};

export default DropDown;
