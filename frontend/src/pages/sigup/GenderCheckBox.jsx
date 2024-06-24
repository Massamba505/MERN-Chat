import "./Signup.css";

const GenderCheckBox = ({ gender, onChangeGender }) => {

    return (
        <div className="check">
            <div>
                <span>Male</span>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === 'male'}
                    onChange={(e)=>onChangeGender(e.target.value)}
                />
            </div>
            <div>
                <span>Female</span>
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === 'female'}
                    onChange={(e)=>onChangeGender(e.target.value)}
                />
            </div>
        </div>
    );
};

export default GenderCheckBox;
