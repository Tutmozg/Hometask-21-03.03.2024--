const req1 = document.querySelector('.btn')
const container = document.querySelector('.container')

req1.addEventListener('click', async () => {
    try {
        const users = await getData('http://localhost:3001/getUsers')
        users.forEach(el => {
            container.insertAdjacentHTML('beforeend', `
            <div class="product">
                <div class="name">name: ${el.name}</div>
                <div class="price">raiting: ${el.raiting}</div>
            </div>
            `)
        });
    } catch (err) {
        console.error('Произошла ошибка при получении пользователей', err)
    }
})
const getData = url => {
    return new Promise((resolve, reject) =>
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    )
}