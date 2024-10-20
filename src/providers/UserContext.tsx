import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import EncryptedStorage from "react-native-encrypted-storage";

interface IProps {
  children: ReactNode;
}

interface IUser {
  username: string;
  token: string;
}

interface IUserContext {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IProps) => {
  async function retrieveUserSession() {
    try {
      const session = await EncryptedStorage.getItem("user_session");
      console.log("store session: ", session);
      if (session) {
        setUser(JSON.parse(session));
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function storeUserSession(user: IUser | null) {
    try {
      await EncryptedStorage.setItem("user_session", JSON.stringify(user));
    } catch (error) {
      console.log(error);
    }
  }
  async function removeUserSession() {
    try {
      await EncryptedStorage.removeItem("user_session");
    } catch (error) {
      console.log(error);
    }
  }

  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    if (user) {
      storeUserSession(user);
    }
  }, [user]);

  useEffect(() => {
    (async () => {
      await retrieveUserSession();
    })();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
