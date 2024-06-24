import {useLogout} from "../../Hooks/useLogout";

export const LogoutButton = ()=>{
    const {logout} = useLogout();
  return (
    <div className="logout">
        <button onClick={logout}>
            Logout
        </button>
    </div>
  )
}