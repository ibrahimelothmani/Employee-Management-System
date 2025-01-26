import { Link } from 'react-router-dom';
import AuthService from '../services/AuthService';

interface SidebarProps {
  handleLogout: () => void;
}

const SidebarComponent = ({ handleLogout }: SidebarProps) => {
  return (
    <div className="bg-dark text-white" style={{ width: '250px', minHeight: '100vh' }}>
      <div className="p-3">
        <h5 className="text-white mb-4">Dashboard</h5>
        <ul className="nav flex-column">
        <li className="nav-item mb-2">
            <Link to="/admins" className="nav-link text-white">
              <i className="bi bi-people me-2"></i>
              ADMINS
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/employees" className="nav-link text-white">
              <i className="bi bi-people me-2"></i>
              List Employees
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/add-employee" className="nav-link text-white">
              <i className="bi bi-person-plus me-2"></i>
              Add Employee
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/about" className="nav-link text-white">
              <i className="bi bi-info-circle me-2"></i>
              About
            </Link>
          </li>
          <li className="nav-item">
            <button 
              onClick={() => {
                localStorage.removeItem('token');
                AuthService.logout();
                handleLogout();
              }} 
              className="nav-link text-white border-0 bg-transparent"
            >
              <i className="bi bi-box-arrow-right me-2"></i>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarComponent; 