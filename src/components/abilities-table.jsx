import * as React from "react";

export const AbilitiesTable = ({ children }) => {
    // rows of abilities to be passed as children prop
    return (
        <table className="w-full table-auto">
            <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Name</th>
                    <th className="py-3 px-6 text-left">Description</th>
                </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light w-full">
                {children}
            </tbody>
        </table>
    );
};

