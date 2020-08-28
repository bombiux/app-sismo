let Bottombar = {
    render: async () => {
        let view = `
        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                    Este es un proyecto personal, hecho únicamente con el propósito de aprender
                </p>
            </div>
        </footer>
        `
        return view
    },
    after_render: async () => { }

}

export default Bottombar;