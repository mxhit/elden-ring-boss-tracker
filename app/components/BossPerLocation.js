"use client"

import { getBossPerLocation } from "../data/data";
import { useState, useEffect } from "react";

function BossPerLocation(locationObj) {
    const storageKey = `killedBosses_${locationObj.location}`;

    // Initialize state from localStorage or default data
    const [bosses, setBosses] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem(storageKey);
            if (saved) {
                return JSON.parse(saved);
            }
        }
        return getBossPerLocation(locationObj.location);
    });

    // Update localStorage when bosses state changes
    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(bosses));
    }, [bosses, storageKey]);

    function handleKilled(bossId) {
        setBosses(prevBosses => prevBosses.map(boss => {
            if (boss.id === bossId) {
                return { ...boss, isKilled: !boss.isKilled };
            }
            return boss;
        }));
    }

    // Calculate killed bosses count
    const killedCount = bosses.filter(boss => boss.isKilled).length;

    return (
        <div>
            <h2 className="font-bold font-serif text-3xl text-center uppercase py-4">{locationObj.location}</h2>
            <p className="text-center mb-4">Bosses Killed: {killedCount} / {bosses.length}</p>
            <table className="table-auto my-0 mx-auto w-1/2 border border-black">
                <thead>
                    <tr>
                        <th className="border border-black px-4 py-2 w-4">Killed</th>
                        <th className="border border-black px-4 py-2 w-80">Name</th>
                        <th className="border border-black px-4 py-2 w-fit">Location</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bosses.map(boss => (
                            <tr key={boss.id} className={boss.isKilled ? "bg-gray-200" : ""}>
                                <td className="border border-black px-4 py-2 text-center">
                                    <input
                                        type="checkbox"
                                        checked={boss.isKilled}
                                        onChange={() => handleKilled(boss.id)}
                                    />
                                </td>
                                <td className="border border-black px-4 py-2">{boss.name}</td>
                                <td className="border border-black px-4 py-2">{boss.location}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <br />
        </div>
    )
}

export default BossPerLocation;