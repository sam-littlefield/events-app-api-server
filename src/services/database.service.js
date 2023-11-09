const MockDatabaseService = require("./class.mock.database.service");
const FirestoreDatabaseService = require("./class.firestore.database.service");

let db;

if(!!process.env.TESTING) {
    db = new MockDatabaseService();
    try {
        db.populate().then(res => {
            // console.log("Back from populate");
            return true;
        }).catch(err => {
            console.log("Error from populate: ", err.message);
        });
    } catch(e) {
        console.log(e.message);
    }
    
} else {
    const dbType = !!process.env.DB ? process.env.DB : 'Firestore';
    if(dbType === 'Firestore') {
        db = new FirestoreDatabaseService();
    } else {
        db = new MockDatabaseService();
    }

}


module.exports = db;
