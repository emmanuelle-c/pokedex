function NavBar ({pokemonIndex, pokemonList, handleNextClick, handlePreviousClick}) {
    return (
        <>
            {pokemonIndex > 0 ? <button onClick={handlePreviousClick}>Précédent</button> : false}
            {pokemonIndex < pokemonList.length -1 ? <button onClick={handleNextClick}>Suivant</button> : false}
        </>
    )
}

export default NavBar;