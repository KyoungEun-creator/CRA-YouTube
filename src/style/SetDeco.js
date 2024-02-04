const setDeco = (value) => {

    if (value === "none") {
        return `
            background-color: transparent;
            color: black;
        `
    }
    else if (value === "black") {
        return `
            background-color: black;
            color: white;
        `
    }
}

export default setDeco;