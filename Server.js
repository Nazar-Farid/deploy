import app  from "./app.js";




app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "Frontend", "dist")));
    res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
    });



app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`)
})

