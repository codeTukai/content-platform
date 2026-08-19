
import { useNavigate } from 'react-router-dom'
import { Button } from '../component/ui/Button'

export function logOut() {
    const navigate= useNavigate();
    localStorage.removeItem("token")
    navigate("/login")

  return (
    <div>
        <Button onClick={logOut} text="Logout" variant="primary" size="md"/>
    </div>
  )
}

