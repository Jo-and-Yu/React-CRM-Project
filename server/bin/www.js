// Server 실행파일

const app = require("../server");

const PORT = process.env.REACT_APP_PORT || 5002;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    console.log(process.env.REACT_APP_DB_USER)
});