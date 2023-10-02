import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("LiveChat");
        const { user1, user2 } = req.body;
        const search = await db
            .collection("Conversation")
            .findOne({ users: {$size: 2, $all: [user1, user2]} })

        if(!search) {
            const newConversation = await db
                .collection("Conversation")
                .insertOne({
                    users: [user1, user2]
                });
            
                res.json(newConversation)
        } else {
            res.json({ erroreNuovaConversazione: true })
        }
        
    } catch (e) {
        res.json(e)
    }
}
