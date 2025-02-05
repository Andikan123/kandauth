import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';

const Navbar = () => {
  const navigate = useNavigate();  // To navigate after signing out

  const handleSignOut = async()=>{
    try {
      await signOut(auth)
      navigate("/login")
    } catch (error) {
      toast.error("error signing out")
    }
  }

  return (
    <nav className='navbar'>
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/register">Register Student</Link></li>
        <li><Link to="/students">View Students</Link></li>
        <li ><button onClick={handleSignOut}>SignOut</button></li>

      </ul>
    </nav>
  );
};
export default Navbar