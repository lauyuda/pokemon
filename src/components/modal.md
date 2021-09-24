```jsx
import { useState } from 'react';
const [isOpen, setIsOpen] = useState(false);

<div>
    <button className="border py-4 px-8 text-xl rounded-lg bg-yellow-500 text-white" onClick={() => { setIsOpen(true) }}>
        Release Pikachu Modal
    </button>
    {isOpen && (
        <Modal onCancel={() => { setIsOpen(false) }} pokemonName="pikachu"/>
    )}
</div>
```
