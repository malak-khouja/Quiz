import UserForm from "../components/UserForm";
import { useContext, useEffect } from "react";
import { nameContext } from "../components/UserContext";
import '../App.css';

export default function Home() {
  const { setUserName } = useContext(nameContext);
  useEffect(() => {
    setUserName("");
  }, [setUserName]);

  return (
    <UserForm />
  );
}