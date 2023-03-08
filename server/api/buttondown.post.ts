// eslint-disable-next-line import/no-anonymous-default-export
export default defineEventHandler(async (event) => {
    const { email } = await readBody(event);
    if (!email) {
        throw createError({ statusCode: 400, statusMessage: "Email is required" });
    }

    try {
        const API_KEY = process.env.BUTTONDOWN_API_KEY;
        const buttondownRoute = `${process.env.BUTTONDOWN_API_URL}subscribers`;
        const response = await fetch(buttondownRoute, {
            body: JSON.stringify({
                email,
            }),
            headers: {
                Authorization: `Token ${API_KEY}`,
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        if (response.status >= 400) {
            throw createError({ statusCode: 500, statusMessage: "There was an error subscribing to the list." });
        }

        setResponseStatus(201);
        return;
    } catch (error: any) {
        throw createError({ statusCode: 500, statusMessage: error.message || error.toString() });
    }
});
