import React from "react";

// on peut aussi écrire {activeId} à la place de props (voire plus bas)
const TabSelector = ({ activeId, setActiveId }) => {
  function handleChangeTab(event) {
    const tabId = event.target.id;
    setActiveId(tabId);
  }

  // const activeId = props.activeId; // équivalent à : const {activeId} = props;

  return (
    <div className="TabSelector">
      <button
        id="home"
        onClick={handleChangeTab}
        className={activeId === "home" ? "active" : ""}
      >
        Home
      </button>
      <button
        id="about"
        onClick={handleChangeTab}
        className={activeId === "about" ? "active" : ""}
      >
        About
      </button>
      <button
        id="contact"
        onClick={handleChangeTab}
        className={activeId === "contact" ? "active" : ""}
      >
        Contact
      </button>
    </div>
  );
};

export default TabSelector;
