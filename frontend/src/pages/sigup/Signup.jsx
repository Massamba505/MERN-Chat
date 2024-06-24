import { useState } from 'react';
import GenderCheckBox from "./GenderCheckBox";
import "./Signup.css";
import { Link } from 'react-router-dom';
import { useSignup } from '../../Hooks/useSignUp';

export const Signup = () => {
    const [formValues, setFormValues] = useState({
        fullname: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleChangeGender = (gender) => {
        setFormValues({
            ...formValues,
            gender
        });
    };
    const {signup} = useSignup();

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Add form validation and submission logic here
        await signup(formValues);
    };

    return (
        <div className="container">
            <h1>SignUp</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type='text'
                        name='fullname'
                        placeholder='Massamba Maphalala'
                        value={formValues.fullname}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type='text'
                        name='username'
                        placeholder='massamba105'
                        value={formValues.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type='password'
                        name='password'
                        placeholder='password...'
                        value={formValues.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        type='password'
                        name='confirmPassword'
                        placeholder='confirm password...'
                        value={formValues.confirmPassword}
                        onChange={handleChange}
                    />
                </div>

                <GenderCheckBox gender={formValues.gender} onChangeGender={handleChangeGender} />

                <Link to='/login'>Already have an account?</Link>
                
                <div className="form-group">
                    <button type='submit'>Signup</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
