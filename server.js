const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const videos = require("./data");
const homeInfo = require("./dataHome");

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    noCache: true,
});

server.get("/", (req, res) => {
    return res.render("about", { data: homeInfo });
});

server.get("/portfolio", (req, res) => {
    return res.render("portfolio", { items: videos });
});

server.get("/video/:id", (req, res) => {
    const id = req.params.id;

    const video = videos.find((video) => {
        return video.id == id;
    });

    if (!video) {
        return res.send("Video Not Found");
    }

    return res.render("video", { item: video, data: homeInfo });
});

server.use((req, res) => {
    res.status(404).render("not-found");
});

server.listen(5000, () => {
    console.log("server is running");
});
