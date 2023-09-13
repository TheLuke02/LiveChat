import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("LiveChat");
        const { name, password } = req.body;

        const newUser = await db
            .collection("posts")
            .insertOne({
                name,
                password
            });

        res.json(post);
    } catch (error) {
        console.error(e);
        throw new Error(e).message;
    }
}

// BOH, mi devo ancora documentare