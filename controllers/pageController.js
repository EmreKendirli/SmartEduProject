const getIndexPage = (req, res) => {
    res.status(200).render("index", {
        page_Name: "index"
    });

}

const getAboutPage = (req, res) => {
    res.status(200).render("about", {
        page_Name: "about"
    });

}

export {
    getIndexPage,
    getAboutPage
}