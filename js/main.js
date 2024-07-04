import { servicesProduct } from "./product.js";

const productContainer = document.querySelector("[data_product]");
const form = document.querySelector("[data-form");

function createCard(name, price, image, id) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
                    <div class="img-container">
                        <img class="img-cont" src="${image}" alt="${name}">
                    </div>
                    <div class="card-container--info">
                        <p>${name}</p>
                        <div class="card-container--value">
                            <p>$ ${price}</p>
                            <button class="delete-button" data-del="${id}">
                                <img src="./img/icon_trash.png"  alt="excluir"/>
                            </button>
                           
                        </div>
                    </div>
    `;

    const deleteButton = card.querySelector(".delete-button");
    deleteButton.addEventListener("click", async () => {
        try{
        await servicesProduct.deleteProduct(id);
        card.remove();
        }catch(error){
            console.log(error);
            }
            });

    productContainer.appendChild(card);
    return card;

}


const render = async () =>{
    try {
        const listProducts = await servicesProduct.productList();

        listProducts.forEach(product => {
            productContainer.appendChild(
                createCard(
                    product.name,
                    product.price,
                    product.image,
                    product.id
                )              
            )
    });
        
    } catch (error){
        console.log(err)
    } 
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    servicesProduct
        .createProducts(name, price, image)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
});

render();