let Bottombar = {
    render: async () => {
        let view = `
        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                    Este es un proyecto personal
                </p>
            </div>
        </footer>
        `
        return view
    },
    after_render: async () => { }

}

export default Bottombar;