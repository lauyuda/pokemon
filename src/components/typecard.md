```jsx
<>
    <div className="grid grid-cols-3 gap-2">
        <TypeCard types={[
                            {
                                "type": {
                                    "name": "fire",
                                    "url": "https://pokeapi.co/api/v2/type/10/"
                                }
                            },
                            {
                                "type": {
                                    "name": "flying",
                                    "url": "https://pokeapi.co/api/v2/type/3/"
                                }
                            }
                        ]}>
            <span>Testing two types</span>
        </TypeCard>
        <TypeCard types={[
                            {
                                "type": {
                                    "name": "water",
                                }
                            },
                        ]}>
            <span>Testing one type</span>
        </TypeCard>
    </div>    
</>
```
