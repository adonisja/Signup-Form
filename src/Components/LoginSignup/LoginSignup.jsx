import React, { useState } from "react";
import "./LoginSignup.css";
import usr_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import academic_icon from '../Assets/grad.jpeg';

const LoginSignup = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        academicLevel: "",
        courses: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            courses: checked
                ? [...prevState.courses, value]
                : prevState.courses.filter((course) => course !== value),
        })); -
    };

    return (
        <div className="container">
            <h2 className="header">REDHAT COURSE SIGN-UP FORM</h2>

            <form className="signup-form">
                <div className="input-group">
                    <img src={usr_icon} alt="User Icon" />
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group">
                    <img src={usr_icon} alt="User Icon" />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group">
                    <img src={email_icon} alt="Email Icon" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group select-group">
                    <img src={academic_icon} alt="Dropdown Icon" />
                    <label htmlFor="academicLevel">Academic Level:</label>
                    <select
                        name="academicLevel"
                        id="academicLevel"
                        value={formData.academicLevel}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select your academic level</option>
                        <option value="Freshman">Freshman</option>
                        <option value="Sophomore">Sophomore</option>
                        <option value="Junior">Junior</option>
                        <option value="Senior">Senior</option>
                    </select>
                </div>

                <div className="checkbox-container">
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            value="RH104"
                            checked={formData.courses.includes("RH104")}
                            onChange={handleCheckboxChange}
                        />
                        <a href="https://www.redhat.com/en/services/training/getting-started-with-linux-fundamentals" target="_blank" rel="noopener noreferrer">
                            RH104
                        </a>
                    </label>

                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            value="RH124"
                            checked={formData.courses.includes("RH124")}
                            onChange={handleCheckboxChange}
                        />
                        <a href="https://www.redhat.com/en/services/training/rh124-red-hat-system-administration-i" target="_blank" rel="noopener noreferrer">
                            RH124
                        </a>
                    </label>

                    <label className="checkbox-label aws-link">
                        <input
                            type="checkbox"
                            value="AWS Course"
                            checked={formData.courses.includes("AWS Course")}
                            onChange={handleCheckboxChange}
                        />
                        <a
                            href="https://aws.training"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            AWS Course (Prospective Offer)
                        </a>
                    </label>
                </div>

                <button type="submit" className="submit-btn">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default LoginSignup;
