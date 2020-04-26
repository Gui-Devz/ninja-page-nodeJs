const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const videos = require("./data");

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    noCache: true,
});

server.get("/", (req, res) => {
    const data = {
        avatar_url:
            "https://pm1.narvii.com/6283/d88e163d60b563c5fead64b8821a60ca854ae2e9_00.jpg",
        name: "Naruto Uzumaki",
        role: "Ninja da aldeia da folha",
        description:
            "Um ninja dedicado e apaixonado por sua profissão, dominador devários jutsus avançados. Teve uma infância difícil cresceu sem seus pais, mas superou todas as dificuldades que a vida lhe impôs com a ajuda de seus amigos ninjas. Atual Hokage da Aldeia da Folha.",
        links: [
            { name: "Github", url: "https://github.com/Gui-Devz" },
            {
                name: "Linkedin",
                url: "https://www.linkedin.com/in/guilherme-batalha-2b913448",
            },
            { name: "Twitter", url: "https://twitter.com/Batalha97" },
        ],
    };

    return res.render("about", { data });
});

server.get("/portfolio", (req, res) => {
    return res.render("portfolio", { items: videos });
});

server.get("/video", (req, res) => {
    const id = req.query.id;

    const video = videos.find((video) => {
        if (video.id == id) {
            return true;
        }
    });

    if (!video) {
        return res.send("Video Not Found");
    }

    return res.render("video", { item: video });
});

server.use((req, res) => {
    res.status(404).render("not-found");
});

server.listen(5000, () => {
    console.log("server is running");
});
