import app from "./app.js";
import { env } from "./config/env.js";
import { connectDB } from "./config/db.js";

const PORT = env.PORT;
connectDB();

app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
})