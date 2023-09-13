import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    try {
        
        const client = await clientPromise;
        const db = client.db("LiveChat");
        const { name, password } = JSON.parse(req.body);
        
        

        const newUser = await db
            .collection("User")
            .insertOne({
                name: name,
                password: password
            });
        
        
        res.json(JSON.parse(req.body));
    } catch (error) {
        console.error(e);
        throw new Error(e).message;
    }
}

// BOH, mi devo ancora documentare