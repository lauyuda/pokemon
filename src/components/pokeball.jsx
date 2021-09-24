import pokeball from "images/pokeball.png"

export const Pokeball = () => {
    return (
        <div className="relative flex justify-center items-center">
            <div className="w-24">
                <img src={pokeball} alt="pokeball" />
            </div>
            <div className="absolute bg-yellow-600 animate-pulse w-4 h-4 rounded-full"></div>
        </div>
    );
};
