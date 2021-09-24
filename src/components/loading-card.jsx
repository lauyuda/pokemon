export const LoadingCard = () => {
    return (
        <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex flex-col space-y-4">
                <div className="rounded-lg bg-gray-400 h-24 w-full"></div>
                <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-400 rounded"></div>
                        <div className="h-4 bg-gray-400 rounded w-5/6"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
