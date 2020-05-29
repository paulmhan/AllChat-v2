import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const LanguageOptions = [
    { key: 'cn', value: 'cn', flag: 'cn', text: 'Chinese (Mandarin)' },
    { key: 'es', value: 'es', flag: 'es', text: 'Spanish' },
    { key: 'gb', value: 'gb', flag: 'gb', text: 'English' },
    { key: 'in', value: 'in', flag: 'in', text: 'Hindi' },
    { key: 'sa', value: 'sa', flag: 'sa', text: 'Arabic' },
    { key: 'pt', value: 'pt', flag: 'pt', text: 'Portuguese' },
    { key: 'bd', value: 'bd', flag: 'bd', text: 'Bengali' },
    { key: 'ru', value: 'ru', flag: 'ru', text: 'Russian' },
    { key: 'jp', value: 'jp', flag: 'jp', text: 'Japanese' },
    { key: 'pk', value: 'pk', flag: 'pk', text: 'Lahnda' },
    { key: 'id', value: 'id', flag: 'id', text: 'Javanese' },
    { key: 'de', value: 'de', flag: 'de', text: 'German' },
    { key: 'kr', value: 'kr', flag: 'kr', text: 'Korean' },
    { key: 'fr', value: 'fr', flag: 'fr', text: 'French' },
    { key: 'in', value: 'in', flag: 'in', text: 'Telugu' },
    { key: 'in', value: 'in', flag: 'in', text: 'Marathi' },
    { key: 'tr', value: 'tr', flag: 'tr', text: 'Turkish' },
    { key: 'sg', value: 'sg', flag: 'sg', text: 'Tamil' },
    { key: 'vn', value: 'vn', flag: 'vn', text: 'Vietnamese' },
    { key: 'in', value: 'in', flag: 'in', text: 'Urdu' }
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