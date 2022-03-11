// Server 실행파일

const app = require("../server");

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});