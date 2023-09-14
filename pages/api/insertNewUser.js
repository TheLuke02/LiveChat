import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("LiveChat");
        const { name, password } = req.body;
        const search = await db
            .collection("User")
            .findOne({ name: name })

        if (search == null || search.name != name) {
            const newUser = await db
                .collection("User")
                .insertOne({
                    name: name,
                    password: password
                });

            res.json(newUser)

        } else {
            res.json({ erroreUtente: "Utente già registrato" })
        }
    } catch (e) {
        console.error(e)
    }
}
