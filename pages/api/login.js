import clientPromise from "../../lib/mongodb"; // Per potersi connettere al DB
import { withSessionRoute } from "pages/lib/config/withSession"; // Per creare la sessione

export default withSessionRoute(createSessionRoute);

async function createSessionRoute(req, res) {
   try {
       const client = await clientPromise; // Aspetto una risposta sullo stato della connessione con il server
       const db = client.db("LiveChat"); // Mi connetto al DB
       const { name, password } = req.body;

       const search = await db
            .collection("User") // Seleziono la collezione di documenti relativa a User
            .findOne({name: name}) // prendo un solo documento dentro la Collezione User
        
        if(search == null || search.password != password)
            res.json({"erroreCredenziali": "Credenziali non valide"})
        else {
            req.session.user = { // Creo la sessione
                username: name,
                session: true
            }
            await req.session.save() // Salvo la sessione
            res.json({trovato: true})
        }
   } catch (e) {
       console.error(e);
   }
}; 

