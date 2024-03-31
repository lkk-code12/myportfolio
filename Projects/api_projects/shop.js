let title = document.getElementById(`tbody`);
let card_data = document.getElementById(`card_data`);
let card_image = document.getElementById(`card_image`);
let home = document.getElementById(`home`);
let card_text = document.getElementById(`card_text`);

fetch(`https://fakestoreapi.com/products`)
    .then((fake_store) => fake_store.json()
        .then((result) => {
            // console.log(result);
            let data = "";
            for (let i = 0; i < result.length; i++) {
                data += `<tr onclick="detail(${result[i].id})">
                            <td>${result[i].id}</td>
                            <td>${result[i].title}</td>
                            <td><b>$</b>${result[i].price}</td>
                            <td>${result[i].rating.rate}</td>
                            <td><a href="${result[i].image}" target="_blank">
                                    <img src="${result[i].image}" width="80px" height="100px"/>
                                </a>
                            </td>
                        </tr>`;
            }
            title.innerHTML = data;
        })
    );

function detail(id) {
    fetch(`https://fakestoreapi.com/products/` + id)
        .then((response) => response.json())
        .then((result) => {
            card_image.innerHTML = `<img src="${result.image}" width="100px" height="100px">`

            card_text.innerHTML = `<span>${result.title}</span><br>
                                <span>$ ${result.price}</span><br>
                                <span>${result.rating.rate}</span>`

            card_data.style.display = "block";
        })
}