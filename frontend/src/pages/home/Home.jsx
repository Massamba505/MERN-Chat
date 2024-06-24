import { MessageContainer } from "../../components/message/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";
export default function Home() {
  return (
    <div className="Homecontainer">
      <Sidebar />
      <MessageContainer/>
    </div>
  )
}
