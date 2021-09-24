import { StatsBar } from "./stats-bar";

export const StatsTable = ({ hp, atk, def, spatk, spdef, spd }) => {
    return (
        <div className="grid grid-cols-1 w-full">
            <div className="flex py-3 px-6 text-left gap-2">
                <span className="flex justify-end w-32 text-gray-500" >HP:</span>
                <span className="w-12 text-gray-900" >{hp}</span>
                <StatsBar stat={hp} />
            </div>
            <div className="flex py-3 px-6 text-left gap-2">
                <span className="flex justify-end w-32 text-gray-500" >Attack:</span>
                <span className="w-12 text-gray-900" >{atk}</span>
                <StatsBar stat={atk} />
            </div>
            <div className="flex py-3 px-6 text-left gap-2">
                <span className="flex justify-end w-32 text-gray-500" >Defense:</span>
                <span className="w-12 text-gray-900" >{def}</span>
                <StatsBar stat={def} />
            </div>
            <div className="flex py-3 px-6 text-left gap-2">
                <span className="flex justify-end w-32 text-gray-500" >Sp-Attack:</span>
                <span className="w-12 text-gray-900" >{spatk}</span>
                <StatsBar stat={spatk} />
            </div>
            <div className="flex py-3 px-6 text-left gap-2">
                <span className="flex justify-end w-32 text-gray-500" >Sp-Defense:</span>
                <span className="w-12 text-gray-900" >{spdef}</span>
                <StatsBar stat={spdef} />
            </div>
            <div className="flex py-3 px-6 text-left gap-2">
                <span className="flex justify-end w-32 text-gray-500" >Speed:</span>
                <span className="w-12 text-gray-900" >{spd}</span>
                <StatsBar stat={spd} />
            </div>
        </div>
    );
};

