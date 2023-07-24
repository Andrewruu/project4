import React, {useState, useEffect} from "react";
import { toast } from "react-toastify";
// create the context
const UserContext = React.createContext();

// create a provider component
function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };