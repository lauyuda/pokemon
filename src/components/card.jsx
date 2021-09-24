import { TypeChip } from "./typechip";
import { Link } from "react-router-dom";
import { Capture } from "../domains/pokedex/components/capture";

export const Card = ({ imageUrl, name, hp, atk, def, spatk, spdef, spd, types }) => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex justify-center">
                <div className="bg-white relative shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 rounded-lg">
                    <Link to={`/pokemon/${name}`}>
                        <img className="rounded-t-lg" src={imageUrl} alt="" />
                    </Link>
                    <div className="py-6 px-8 rounded-lg bg-white space-x-2">
                        {types.map((type) => (
                            <TypeChip key={type.type.name} type={type.type.name} />
                        )
                        )}
                        <Link to={`/pokemon/${name}`}>
                            <h1 className="mt-6 text-gray-600 font-bold text-2xl capitalize hover:text-gray-900">{name}</h1>
                        </Link>

                        <div className="mt-2 grid grid-cols-2 gap-2 text-gray-600">
                            <div className="flex w-full justify-between bg-red-300 px-2 rounded">
                                <div>HP</div>
                                <div>{hp}</div>
                            </div>
                            <div className="flex w-full justify-between bg-yellow-500 px-2 rounded">
                                <div>ATT</div>
                                <div>{atk}</div>
                            </div>
                            <div className="flex w-full justify-between bg-yellow-300 px-2 rounded">
                                <div>DEF</div>
                                <div>{def}</div>
                            </div>
                            <div className="flex w-full justify-between bg-blue-300 px-2 rounded">
                                <div>SP-ATT</div>
                                <div>{spatk}</div>
                            </div>
                            <div className="flex w-full justify-between bg-green-300 px-2 rounded">
                                <div>SP-DEF</div>
                                <div>{spdef}</div>
                            </div>
                            <div className="flex w-full justify-between bg-pink-300 px-2 rounded">
                                <div>SPD</div>
                                <div>{spd}</div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-3 right-3">
                        <Capture pokemonName={name} />
                    </div>
                </div>
            </div>
        </div>
    );
};