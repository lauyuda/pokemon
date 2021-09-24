import * as React from "react";
import { useAbility } from "../hooks/use-ability";

export const AbilityRow = ({ abilityId }) => {
    const { data, isLoading } = useAbility(abilityId)

    return (
        <>
            {!isLoading && (
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left w-2/12">
                        <span className="capitalize">{data.name}</span>
                    </td>
                    <td className="py-3 px-6 text-left">
                        <span>{data.effect_entries[1].short_effect}</span>
                    </td>
                </tr>
            )}
        </>
    );
};

