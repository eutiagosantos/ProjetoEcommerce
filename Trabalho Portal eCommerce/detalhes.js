document.addEventListener('DOMContentLoaded', function () {
    let boxElements = document.querySelectorAll('.product-item');

    boxElements.forEach(function (box1Element) {
        box1Element.addEventListener('click', function () {
            const productId = box1Element.dataset.productId;
            window.location.href = `detalhes.html?id=${productId}`;

        });
    });

    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(products => {
            products.forEach(function (product, index) {
                const box1Element = boxElements[index];

                const imageElement = box1Element.querySelector('.imagem');
                imageElement.src = product.image;

                const desElement = box1Element.querySelector('.descricaoproduto');
                desElement.src = product.image;


                const tituloElement = box1Element.querySelector('.tituloproduto');
                tituloElement.textContent = product.title;

                const descricaoElement = box1Element.querySelector('.idproduto');
                descricaoElement.textContent = product.id;

                const priceElement = box1Element.querySelector('.precoproduto');
                priceElement.textContent = `R$:${product.price}`;

            });

        })
        .catch(error => {
            console.error(error);
        });
});



