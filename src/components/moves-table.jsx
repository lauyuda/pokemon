export const MovesTable = ({children}) => {
    // rows of moves to be passed as children prop
    return (
        <table  className="w-full table-auto">
            <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Name</th>
                    <th className="py-3 px-6 text-left">Type</th>
                    <th className="py-3 px-6 text-center">Category</th>
                    <th className="py-3 px-6 text-center">PP</th>
                    <th className="py-3 px-6 text-center">Power</th>
                    <th className="py-3 px-6 text-center">Accuracy</th>
                </tr>
            </thead>
            <tbody  className="text-gray-600 text-sm font-light w-full">
                {children}
            </tbody>
        </table>
    );
};

