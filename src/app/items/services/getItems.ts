async function getItems(search: string | null) {
    const res = await fetch(
        `http://localhost:4000/api/items?q=${search}`,
        {
            method: 'GET',
            headers: {
                'user-signature': 'FRANCISCO-MICUCCI',
            },
        }
    );

    if (!res.ok) {
        throw Error('Hubo un error al cargar los items');
    }

    return res.json();
}

export default getItems;