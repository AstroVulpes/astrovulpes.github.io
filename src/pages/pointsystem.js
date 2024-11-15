import React, { useState } from 'react';
import './pointsystem.css'; // Assuming you will create this CSS file
import flagAL from '../flags/Eurovision_Song_Contest_heart_Albania_white.svg';
import flagAM from '../flags/Eurovision_Song_Contest_heart_Armenia_white.svg';
import flagCY from '../flags/Eurovision_Song_Contest_heart_Cyprus_white.svg';
import flagEE from '../flags/Eurovision_Song_Contest_heart_Estonia_white.svg';
import flagFR from '../flags/Eurovision_Song_Contest_heart_France_white_(1794-1815,_1830-1974).svg';
import flagGE from '../flags/Eurovision_Song_Contest_heart_Georgia_white.svg';
import flagDE from '../flags/Eurovision_Song_Contest_heart_Germany_white.svg';
import flagIE from '../flags/Eurovision_Song_Contest_heart_Ireland_white.svg';
import flagIT from '../flags/Eurovision_Song_Contest_heart_Italy_white.svg';
import flagMT from '../flags/Eurovision_Song_Contest_heart_Malta_white.svg';
import flagNL from '../flags/Eurovision_Song_Contest_heart_Netherlands_white.svg';
import flagMK from '../flags/Eurovision_Song_Contest_heart_North_Macedonia_white.svg';
import flagPL from '../flags/Eurovision_Song_Contest_heart_Poland_white.svg';
import flagPT from '../flags/Eurovision_Song_Contest_heart_Portugal_white.svg';
import flagSM from '../flags/Eurovision_Song_Contest_heart_San_Marino_white.svg.png';
import flagES from '../flags/Eurovision_Song_Contest_heart_Spain_white.svg.png';
import flagUA from '../flags/Eurovision_Song_Contest_heart_Ukraine_white.svg';

const initialCountries = [
    { id: 1, name: 'Albania', points: 0, image: flagAL },
    { id: 2, name: 'Armenia', points: 0, image: flagAM },
    { id: 3, name: 'Cyprus', points: 0, image: flagCY },
    { id: 4, name: 'Estonia', points: 0, image: flagEE },
    { id: 5, name: 'France', points: 0, image: flagFR },
    { id: 6, name: 'Georgia', points: 0, image: flagGE },
    { id: 7, name: 'Germany', points: 0, image: flagDE },
    { id: 8, name: 'Ireland', points: 0, image: flagIE },
    { id: 9, name: 'Italy', points: 0, image: flagIT },
    { id: 10, name: 'Malta', points: 0, image: flagMT },
    { id: 11, name: 'Netherlands', points: 0, image: flagNL },
    { id: 12, name: 'North Macedonia', points: 0, image: flagMK },
    { id: 13, name: 'Poland', points: 0, image: flagPL },
    { id: 14, name: 'Portugal', points: 0, image: flagPT },
    { id: 15, name: 'San Marino', points: 0, image: flagSM },
    { id: 16, name: 'Spain', points: 0, image: flagES },
    { id: 17, name: 'Ukraine', points: 0, image: flagUA },
];

const Pointsystem = () => {
    const [countries, setCountries] = useState(initialCountries);

    const addPoints = (id, pointsToAdd) => {
        setCountries(countries.map(country => 
            country.id === id ? { ...country, points: country.points + pointsToAdd } : country
        ));
    };

    // Step 1: Sort countries by points in descending order
    const sortedCountries = [...countries].sort((a, b) => b.points - a.points);
    const midIndex = Math.ceil(sortedCountries.length / 2); // Use ceil to ensure left column gets the extra country

    // Step 2: Split the sorted countries into upper and lower halves
    const upperHalf = sortedCountries.slice(0, midIndex); // Top half (left column)
    const lowerHalf = sortedCountries.slice(midIndex);     // Bottom half (right column)

    return (
        <div>
        <div className="table-container">
            <div className="column">
                {upperHalf.map(country => (
                    <div className="box" key={country.id}>
                        <div className="info-container">
                            <img src={country.image} alt={country.name} width={50} />
                            <h3>{country.name}</h3>
                            <h3>{country.points}</h3>
                        </div>
                        <div className="button-container">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map(points => (
                                <button key={points} onClick={() => addPoints(country.id, points)}>
                                    +{points}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="column">
                {lowerHalf.map(country => (
                    <div className="box" key={country.id}>
                        <div className="info-container">
                            <img src={country.image} alt={country.name} width={50} />
                            <h3>{country.name}</h3>
                            <h3>{country.points}</h3>
                        </div>
                        <div className="button-container">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map(points => (
                                <button key={points} onClick={() => addPoints(country.id, points)}>
                                    +{points}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div><h4>AstroTV</h4></div>
        </div>
    );
};

export default Pointsystem;