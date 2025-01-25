import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import AuthService from '../services/AuthService';
import keycloak from '../services/KeycloakService';
import { useState } from 'react';

const HeaderComponent = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
    const user = AuthService.getCurrentUser();
    const username = user?.name || keycloak.tokenParsed?.preferred_username || 'User';
    const [showEye, setShowEye] = useState(false);

    const handleClick = () => {
        setShowEye(!showEye);
        toggleSidebar();
    };

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="btn btn-warning me-2" onClick={handleClick}>
                        <FontAwesomeIcon icon={showEye ? faEye : faEyeSlash} />
                    </button>
                    <span className="navbar-text text-white me-auto">
                        Welcome, {username}
                    </span>
                </div>
            </nav>
        </header>
    );
};

export default HeaderComponent;
