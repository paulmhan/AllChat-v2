import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const LanguageOptions = [
    { key: 'arabic', value: 'arabic', flag: 'sa', text: 'Arabic' },
    { key: 'bengali', value: 'bengali', flag: 'bd', text: 'Bengali' },
    { key: 'chinese', value: 'chinese', flag: 'cn', text: 'Chinese (Mandarin)' },
    { key: 'english', value: 'english', flag: 'us', text: 'English' },
    { key: 'french', value: 'french', flag: 'fr', text: 'French' },
    { key: 'german', value: 'german', flag: 'de', text: 'German' },
    { key: 'hindi', value: 'hindi', flag: 'in', text: 'Hindi' },
    { key: 'japanese', value: 'japanese', flag: 'jp', text: 'Japanese' },
    { key: 'javanese', value: 'javanese', flag: 'id', text: 'Javanese' },
    { key: 'korean', value: 'korean', flag: 'kr', text: 'Korean' },
    { key: 'lahnda', value: 'lahnda', flag: 'pk', text: 'Lahnda' },
    { key: 'marathi', value: 'marathi', flag: 'in', text: 'Marathi' },
    { key: 'portuguese', value: 'portuguese', flag: 'pt', text: 'Portuguese' },
    { key: 'russian', value: 'russian', flag: 'ru', text: 'Russian' },
    { key: 'spanish', value: 'spanish', flag: 'es', text: 'Spanish' },
    { key: 'tamil', value: 'tamil', flag: 'sg', text: 'Tamil' },
    { key: 'telugu', value: 'telugu', flag: 'in', text: 'Telugu' },
    { key: 'turkish', value: 'turkish', flag: 'tr', text: 'Turkish' },
    { key: 'urdu', value: 'urdu', flag: 'in', text: 'Urdu' },
    { key: 'vietnamese', value: 'vietnamese', flag: 'vn', text: 'Vietnamese' },  
];

const LanguageSelect = () => {
    return(
        <Dropdown
        placeholder='Select your language'
        fluid
        search
        selection
        options={LanguageOptions}
        />
    )
};

export default LanguageSelect;