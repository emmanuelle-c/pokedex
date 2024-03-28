
function NavBar ({ pokemonList, handleClick, pokemonIndex}) {


    return (
        <>
        {pokemonList.map((pokemon, index) => 
        <button key={pokemon.name} onClick = {() => handleClick(index)}>{pokemon.name}</button>)
        }
        </>
    )
}

export default NavBar;