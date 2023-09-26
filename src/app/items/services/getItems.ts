async function getItems(search: string | null) {
    const res = await fetch(
        `http://localhost:4000/api/items?q=${search}`
    );

    if (!res.ok) {
        throw Error("Hubo un error al traer los usuarios");
    }

    return res.json();
}

export default getItems;