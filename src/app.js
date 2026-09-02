import cors from "cors";
import express from "express";
import allRoutes from "./routes/routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} (${req.path}) URL: ${req.url} - Headers: ${JSON.stringify(req.headers)} - Body: ${JSON.stringify(req.body)}`)
    next();
});

app.use("/api", allRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: "Ruta no encontrada" });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    const status = err.status || 500;
    const message = err.message || "Error interno del servidor";
    
    res.status(status).json({ success: false, error: message });
});

export default app;