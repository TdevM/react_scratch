import React from "react";
import PropTypes from "prop-types";

const Input = ({label, text, type, id, value, handleChange}) => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className="form-group">
            <div>
                <label htmlFor={label}>{text}</label>
                <input
                    type={type}
                    className="form-control"
                    id={id}
                    value={value}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>


            </div>


        </div>

    );
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default Input;