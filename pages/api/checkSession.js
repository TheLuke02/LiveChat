import { withSessionSsr } from '../lib/config/withSession';

export default withSessionSsr( // Controllo se la sessione è attiva
                    async ({ req, res }) => {
                      const user = req.session.user;
                      if (!user) {
                        return {
                          props: false
                        }
                      }

                      return user
                    });