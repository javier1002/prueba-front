// src/components/buttons/iconButton.tsx
import React from 'react';
import '../../assets/css/componets/buttons/iconButton.css';
import { Link } from 'react-router-dom';

interface IconButtonProps {
    to?: string;
    onClick?: () => void;
    icon: string;
    children: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({ to, onClick, icon, children }) => {
    if (to) {
        return (
            <Link to={to}>
                <button className="icon-button">
                    <span className="material-symbols-outlined">{icon}</span>
                    <span className="icon-button-text">{children}</span>
                </button>
            </Link>
        );
    }
    return (
        <button className="icon-button" onClick={onClick}>
            <span className="material-symbols-outlined">{icon}</span>
            <span className="icon-button-text">{children}</span>
        </button>
    );
};


export default IconButton;