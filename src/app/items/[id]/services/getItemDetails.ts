async function getItemDetails(id: string) {
    const res = await fetch(
        `http://localhost:4000/api/items/${id}`
    );

    if (!res.ok) {
        throw Error("Hubo un error al traer los usuarios");
    }

    return res.json();
}

export default getItemDetails;