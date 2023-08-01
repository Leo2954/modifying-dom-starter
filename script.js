/*  @TODO - Add references to the elements we want to use  */
let changeButton = document.getElementById("change_button");
let addButton = document.getElementById("add_button");
let deleteButton = document.getElementById("delete_button");
let imageDiv = document.getElementById("image_div");
let firstImg = document.getElementById("first_image");
let cock = document.quer


/*  @TODO - Create a Function for our changeButton to change first Pokemon  */
changeButton.onclick  = function() {
    imageDiv.children[0].src = "images/squirtle.png";
}



/*  @TODO - Create a Function for our addButton to Add New Pokemon  */
let pokemonImages = ["pikachu", "bulbasaur", "squirtle", "charmander"];
let index = 0;


addButton.onclick = function() {
    let newPokemon = document.createElement("img");
    newPokemon.src = "images/" + pokemonImages[index] + ".png";
    imageDiv.appendChild(newPokemon);
    index++;
    if(index>3)
    {
        index=0;
    }
}





/*   @TODO - Create a Function for our deleteButton to Delete the First Pokemon   */
deleteButton.onclick = function() {
    imageDiv.removeChild(imageDiv.children[0]);
}


