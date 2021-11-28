import express from "express";
import prayerRoutes from './src/routes/prayer'

const app=express();

app.use(prayerRoutes);



export default app;