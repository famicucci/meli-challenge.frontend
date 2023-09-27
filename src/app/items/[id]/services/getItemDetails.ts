async function getItemDetails(id: string) {
    const res = await fetch(
        `http://localhost:4000/api/items/${id}`,
        {
            method: 'GET',
            headers: {
                'user-signature': 'FRANCISCO-MICUCCI',
            },
        }
    );

    if (!res.ok) {
        throw Error("Hubo un error al cargar el item");
    }

    return res.json();
}

export default getItemDetails;