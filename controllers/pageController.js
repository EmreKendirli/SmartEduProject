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

const getRegisterPage = (req, res) => {
    res.status(200).render("register", {
        page_Name: "register"
    });

}
const getLoginPage = (req, res) => {
    res.status(200).render("login", {
        page_Name: "login"
    });

}

export {
    getIndexPage,
    getAboutPage,
    getRegisterPage,
    getLoginPage
}