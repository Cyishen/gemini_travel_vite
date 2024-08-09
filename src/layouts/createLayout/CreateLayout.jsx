import { Outlet } from "react-router-dom"
import './createLayout.css'
const CreateLayout = () => {
  return (
    <div className="createLayout">
      <Outlet />
    </div>
  )
}

export default CreateLayout