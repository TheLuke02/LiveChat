import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    try {
        
        const client = await clientPromise;
        const db = client.db("LiveChat");
        const { name, password } = JSON.parse(req.body);
        const search = await db
            .collection("User")
            .findOne({name: name})
        
        if(search == null || search.name != name) {
            const newUser = await db
            .collection("User")
            .insertOne({
                name: name,
                password: password
            });
            
            res.json(true)

        } else {
            res.json(false)
        }

    } catch (error) {
        console.error(e);
        throw new Error(e).message;
    }
}
