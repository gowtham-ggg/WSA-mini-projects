import React from 'react';

const Button = ({ handleButtonClick }) => {
    const buttonRows = [
        { label: "C", className: "bg-icon clear" },
        { label: "DEL", className: "bg-icon delete" },
        { label: "%", className: "bg-icon percent" },
        { label: "/", className: "bg-icon divide" },
        { label: "7" },
        { label: "8" },
        { label: "9" },
        { label: "*", className: "bg-icon multiply" },
        { label: "4" },
        { label: "5" },
        { label: "6" },
        { label: "+", className: "bg-icon plus" },
        { label: "3" },
        { label: "2" },
        { label: "1" },
        { label: "-", className: "bg-icon minus" },
        { label: "0", className: "zero" },
        { label: "." },
        { label: "=", className: "bg-icon equal" }
    ];

    return (
        <section className="btn-row">
            {buttonRows.map((btn, index) => (
                <button
                    key={index}
                    className={btn.className}
                    onClick={() => handleButtonClick(btn.label)}>
                    {btn.label}
                </button>
            ))}
        </section>
    );
};

export default Button;
