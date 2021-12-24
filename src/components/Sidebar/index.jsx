import { Footer } from "../Footer";
import { Search } from "../Search";
import "./styles.css";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useEffect, useState } from "react";

export const Sidebar = (props) => {
  const { hasSearch, hasNews, hasFollows, hasTrending } = props;
  const [isVisible, setVisible] = useState(true);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setVisible(false);
      }
      if (user) {
        setVisible(true);
      }
    });
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="sidebar">
          {hasSearch && <Search />}
          {/*Has news etc panels here*/}
          <Footer />
        </div>
      )}
    </div>
  );
};
