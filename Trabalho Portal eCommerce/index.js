/*document.addEventListener('DOMContentLoaded', function () {
    const boxElements = document.querySelectorAll('.box1');

    boxElements.forEach(function (box1Element) {
        box1Element.addEventListener('click', function () {
            const productId = box1Element.dataset.productId;
            window.location.href = `detalhes.html?id=${productId}`;
        });
    });

    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(products => {
            const productElements = document.querySelectorAll('.box1');

            products.forEach(function (product, index) {
                const productElement = productElements[index];

                const imageElement = productElement.querySelector('.imagem');
                imageElement.src = product.image;

                const tituloElement = productElement.querySelector('.tituloproduto');
                tituloElement.textContent = product.title;

                const idElement = productElement.querySelector('.Iddoproduto');
                idElement.textContent = `ID: ${product.id}`;

                const priceElement = productElement.querySelector('.precoProduto');
                priceElement.textContent = `R$: ${product.price}`;
            });
        })
        .catch(error => {
            console.error(error);
        });
});*/

document.addEventListener('DOMContentLoaded', function () {
    let boxElements = document.querySelectorAll('.box1');

    boxElements.forEach(function (box1Element) {
        box1Element.addEventListener('click', function () {
            const productId = box1Element.dataset.productId;
            window.location.href = `detalhes.html?id=${productId}`;
        });
    });

    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(products => {
            const productElements = document.querySelectorAll('.box1');

            productElements.forEach((productElement, index) => {
                const product = products[index];

                const imageElement = productElement.querySelector('.imagem');
                imageElement.src = product.image;

                const tituloElement = productElement.querySelector('.tituloproduto');
                tituloElement.textContent = product.title;

                const idProdutoElement = productElement.querySelector('.Iddoproduto');
                idProdutoElement.textContent = `ID: ${product.id}`;

                const precoProdutoElement = productElement.querySelector('.precoProduto');
                precoProdutoElement.textContent = `Preço: R$ ${product.price}`;
            });
        })
        .catch(error => {
            console.error(error);
        });
});

