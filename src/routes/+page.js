export async function load({ fetch }) {
    const punsResponse = await fetch("/api/puns", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    });

    const puns = await punsResponse.json();

    return puns
}
