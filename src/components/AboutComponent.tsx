import React from 'react'

const AboutComponent = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <img 
                        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmQ5YTBiYjMwNjBkZDVmZDM4ZDM4ZjI5ZjM5ZmM5ZjM5ZjM5ZmM5ZiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/l4JyOCNEfXvVYEqB2/giphy.gif"
                        alt="Animated man saying welcome" 
                        className="img-fluid rounded shadow"
                        style={{maxHeight: '400px'}}
                    />
                </div>
                <div className="col-md-8">
                    <h2 className="mb-4">About Us</h2>
                    <div className="list-group">
                        <div className="list-group-item">
                            <h5 className="mb-1">Our Mission</h5>
                            <p className="mb-1">To provide innovative HR solutions that empower organizations and their employees.</p>
                        </div>
                        <div className="list-group-item">
                            <h5 className="mb-1">Our Vision</h5>
                            <p className="mb-1">To become the leading employee management platform, fostering productive and happy workplaces.</p>
                        </div>
                        <div className="list-group-item">
                            <h5 className="mb-1">Our Values</h5>
                            <ul className="list-unstyled mb-1">
                                <li>✓ Transparency</li>
                                <li>✓ Innovation</li>
                                <li>✓ Employee Wellbeing</li>
                                <li>✓ Customer Success</li>
                            </ul>
                        </div>
                        <div className="list-group-item">
                            <h5 className="mb-1">Contact Us</h5>
                            <p className="mb-1">
                                Email: contact@company.com<br/>
                                Phone: (555) 123-4567
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutComponent;
