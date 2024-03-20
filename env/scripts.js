// Criação de divs dinâmica
const container = document.getElementById('dex-container');
console.log(container)
function addPokeCards() {
    // idPoke será a id do DB relacionada, ainda preciso gerar o DB.
    for (let i = 0; i < idPoke.length; i++) {
        let div = document.createElement('div');
        div.classname = "dex"

        let imgProfile = document.createElement('img');
        imgProfile.src = "caminho especificado no DB";
        imgProfile.alt = "nome do poké"
        div.appendChild(imgProfile);

        let pokeId = document.createElement('h3');
        pokeId.textContent = "#" + i.toString().padStart(3, "0")

        let pokeName = document.createElement('h3');
        pokeName.textContent = "Nome do poke"

        let type01 = document.createElement("img");
        type01.src = "caminho especificado no DB";
        type01.alt = "valor especificado no DB";
        div.appendChild(type01)

        // algumValorTipo2 seria uma das colunas, provavelmente tenho que indicar em qual id, mas é uma preocupação futura.
        if (algumValorTipo2.value !== null) {
            let type02 = document.createElement("img");
            type02.src = "caminho especificado no DB";
            type02.alt = "valor especificado no DB"
            div.appendChild(type02)
        }
        
        container.appendChild(div)
    }

    //Tenho que descobrir como coletar a informação específica:
    /*
    - Descrição: https://pokeapi.co/api/v2/pokemon-species/[número da dex] em flavor_text_entries
    - Nome: https://pokeapi.co/api/v2/pokemon-species/[número da dex] em name
    - Número da dex: https://pokeapi.co/api/v2/pokemon-species/[número da dex] em pokedex_numbers[0] (National Dex)
    - Formas alternativas: https://pokeapi.co/api/v2/pokemon-species/[número da dex] em varieties
    - Linhas evolutivas: https://pokeapi.co/api/v2/pokemon-species/[número da dex] em evolution_chain ou evolves_from_species
    - Tipos: https://pokeapi.co/api/v2/pokemon/[número da dex] em types
    - Sprites: https://pokeapi.co/api/v2/pokemon/[número da dex] em sprites (De preferência o front_default)
    - Sprites dos ícones de tipo: Adicionar em alguma pasta as imagens ou pegar o link delas em algum site.
    */
}