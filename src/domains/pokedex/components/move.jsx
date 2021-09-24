import * as React from "react";
import { useMove } from "../hooks/use-move";
import { TypeChip } from "components/typechip";

export const MoveRow = ({ moveId }) => {
    const { data, isLoading } = useMove(moveId)

    return (
        <>
            {!isLoading && (
                <tr className="border-b border-gray-200 hover:bg-gray-100 w-full">
                    <td className="py-3 px-6 text-left">
                        <span className="capitalize">{data.name}</span>
                    </td>
                    <td className="py-3 px-6 text-left">
                        <TypeChip type={data.type.name} />
                    </td>
                    <td className="py-3 px-6 text-center">
                        <span className="capitalize">{data.damage_class.name}</span>
                    </td>
                    <td className="py-3 px-6 text-center">
                        <span>{data.pp}</span>
                    </td>
                    <td className="py-3 px-6 text-center">
                        <span>{data.power ? data.power : "-"}</span>
                    </td>
                    <td className="py-3 px-6 text-center">
                        <span>{data.accuracy ? data.accuracy : "-"}</span>
                    </td>
                </tr>
            )}
        </>
    );
};