const mongoose = require("mongoose")

const database = "pirates23"

// Can interpolate database or just insert fullstackdemo23 into that function

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a DB Connection to the rebel base: ${database}`))
    .catch((error) => console.log("Abort something is wrong...ABORT!!!", error))

