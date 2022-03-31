

import { Query } from './index'; //needs curly because it is not the default export

const all = () => Query('SELECT * FROM chirps');
const one = (id) => Query('SELECT * FROM chirps WHERE ID = ?', [id]);
const remove = (id) => Query('DELETE FROM chirps WHERE ID = ?', [id])
const insert = (userid, content, location) => Query('INSERT into chirps(userid,content,location) values(?,?,?)',[userid,content,location]);
const update = (content, id) => Query(`UPDATE chirps Set chirps.content = ? WHERE chirps.id = ? `,[content, id]);

export default {
    all,
    one,
    remove,
    insert,
    update
}    


