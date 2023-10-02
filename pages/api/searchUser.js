import clientPromise from "../../lib/mongodb"; // Per potersi connettere al DB

export default async (req, res) => {
   try {
       const client = await clientPromise; // Aspetto una risposta sullo stato della connessione con il server
       const db = client.db("LiveChat"); // Mi connetto al DB
       const {search, except} = req.body

       const users = await db
            .collection("User") // Seleziono la collezione di documenti relativa a User
            .find({name: {$regex: search, $ne: except}}) // prendo tutti i documenti dentro la Collezione User
            .toArray(); // Trasmormo il tutto in un array


       res.json(users); // Risposta in JSON
   } catch (e) {
       console.error(e);
   }
}; 

