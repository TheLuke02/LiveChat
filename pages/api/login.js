import clientPromise from "../../lib/mongodb"; // Per potersi connettere al DB

export default async (req, res) => {
   try {
       const client = await clientPromise; // Aspetto una risposta sullo stato della connessione con il server
       const db = client.db("LiveChat"); // Mi connetto al DB
       const { name, password } = JSON.parse(req.body);

       const search = await db
            .collection("User") // Seleziono la collezione di documenti relativa a User
            .findOne({name: name}) // prendo un solo documento dentro la Collezione User
        
        if(search == null || search.password != password)
            res.json(false);
        else
            res.json(true)
   } catch (e) {
       console.error(e);
   }
}; 

