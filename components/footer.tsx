import React from "react";

export default function Footer() {
    return (
        <footer className="mb-10 px-4 text-center text-gray-500">
            <small className="mb-2 block text-xs">
                &copy; {new Date().getFullYear()} Amit Dutta. All rights reserved.
            </small>

        </footer>
    );
}