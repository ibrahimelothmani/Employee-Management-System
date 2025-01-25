import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';
import { AxiosError } from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const [, setError] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            await AuthService.register({
                name: formData.name,
                email: formData.email,
                password: formData.password
            });
            navigate('/login');
        } catch (error) {
            const err = error as AxiosError<{message: string}>;
            setError(err.response?.data?.message || 'Registration failed');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div 
            className="min-vh-100 d-flex align-items-center justify-content-center"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1491466424936-e304919aada7?q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'rgba(0,0,0,0.5)',
                backgroundBlendMode: 'darken'
            }}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="card bg-dark bg-opacity-25 text-white" style={{ backdropFilter: 'blur(8px)' }}>
                            <div className="card-body p-4">
                                <h2 className="text-center mb-4 fw-semibold">Register</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <input
                                            name="name"
                                            type="text"
                                            className="form-control bg-white bg-opacity-5 text-dark border-secondary"
                                            placeholder="Full name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <input
                                            name="email"
                                            type="email"
                                            className="form-control bg-white bg-opacity-5 text-dark border-secondary"
                                            placeholder="Email address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <input
                                            name="password"
                                            type="password"
                                            className="form-control bg-white bg-opacity-5 text-dark border-secondary"
                                            placeholder="Password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <input
                                            name="confirmPassword"
                                            type="password"
                                            className="form-control bg-white bg-opacity-5 text-dark border-secondary"
                                            placeholder="Confirm password"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100 mb-3"
                                    >
                                        Create Account
                                    </button>
                                </form>

                                <p className="text-center text-white-50 small mb-0">
                                    Already have an account?{' '}
                                    <Link to="/login" className="text-decoration-none text-info">
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register; 