import { Conversations } from './Conversations';
import { LogoutButton } from './LogoutButton'
import { SeachBar } from './SeachBar'
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className='Sidebar'>
        <SeachBar/>
        <Conversations />
        <LogoutButton/>
    </div>
  )
}
