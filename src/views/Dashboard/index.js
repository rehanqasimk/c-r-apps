import { useEffect } from "react";
import { firebase, getAuth, signOut } from "firebase/auth";
import CustomBtn from "../../components/CustomBtn";

function Dashboard() {
  useEffect(() => {
    console.log("Dashboard zinda hua");

    const onClickfunc = () => {
      console.log("click hua!");
    };

    document.addEventListener("click", onClickfunc);

    return () => {
      document.removeEventListener("click", onClickfunc);
      console.log("dashboard ja raha hai Nepal");
    };
  }, []);

  function logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  }

  return (
    <div style={{ background: "gray", height: 300, width: 300 }}>
      <h1>Dashboard</h1>
      <button onClick={logout}>log out</button>
      {/* <CustomBtn /> */}
    </div>
  );
}

export default Dashboard;
