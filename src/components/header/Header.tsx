import { Menu } from "semantic-ui-react";
import { useState } from "react";
import { useNavigate as useHistory, useLocation } from "react-router";
import "./Header.scss";

export default function Home() {
  const currentPath = useLocation();
  const finalCurrentPath = currentPath.pathname.replace("/", "");

  const [activeItem, setActiveItem] = useState(finalCurrentPath);
  const history = useHistory();

  const handleItemClick = (e: any, { name }: any) => {
    setActiveItem(name);
    history(name);
  };
  return (
    <div className="header-menu">
      <Menu secondary>
        <Menu.Item
          name="inicio"
          onClick={handleItemClick}
          active={activeItem === "inicio"}
        />

        <Menu.Item
          name="series"
          onClick={handleItemClick}
          active={activeItem === "series"}
        />

        <Menu.Item
          name="comics"
          onClick={handleItemClick}
          active={activeItem === "comics"}
        />
      </Menu>
    </div>
  );
}
