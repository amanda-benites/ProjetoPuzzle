import { useState } from 'react';

function MenuPost({ options, onSelect }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div>
      <button>
        {selectedOption ? selectedOption.label : 'Selecione uma opção'}
      </button>
      <ul>
        {options.map((option) => (
          <li
            key={option.value}
            onClick={() => handleOptionSelect(option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
