
import { useNavigate } from 'react-router-dom'
import { Button } from '../component/ui/Button'

export function Logout() {
    const navigate= useNavigate();

    const handleLogOut = ()=>{
      localStorage.removeItem("token")
      navigate("/login")

    }

  return (
    <div className='scroll-py-10'>
        <Button onClick={handleLogOut} text="Logout" variant="primary" size="lg"/>
    </div>
  )
}

