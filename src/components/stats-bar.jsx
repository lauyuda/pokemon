export const StatsBar = ({ stat }) => {
    // setting up different colors for different range of numbers
    function percentageColour(stat) {
        if (stat >= 180) {
            return "bg-green-700"
        }
        else if (stat >= 160) {
            return "bg-green-600"
        }
        else if (stat >= 130) {
            return "bg-green-500"
        }
        else if (stat >= 100) {
            return "bg-green-300"
        }
        else if (stat >= 75) {
            return "bg-yellow-400"
        }
        else if (stat >= 50) {
            return "bg-yellow-600"
        }
        else {
            return "bg-red-500"
        }
    };

    return (
        <div className='h-4 w-full'>
            <div
                style={{ width: `${Math.min(stat, 200)/2}%` }}
                className={`h-full rounded-full ${percentageColour(Math.min(stat, 200))}`}>
            </div>
        </div>
    );
};

