```jsx
<>
    <div className="grid grid-cols-3 gap-5">
        <TypeImage types={[
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
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" className="w-full p-10"/>
        </TypeImage>
        <TypeImage types={[
                            {
                                "type": {
                                    "name": "water",
                                }
                            },
                        ]}>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" className="w-full p-10"/>
        </TypeImage>
    </div>    
</>
```
