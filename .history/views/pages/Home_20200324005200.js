import Utils        from './../../services/Utils.js'

let Home = {
    render : async () => {
        let view =  `
            <section class="section">
                <h1> Home </h1>
                <ul>
                    ${ myObj.map(post => 
                        `<li><a href="#/p/${post.id}">${post.dir}</a></li>`
                        ).join('\n ')
                    }
                </ul>
            </section>
        `
        return view
    }
    , after_render: async () => {
    }

}

export default Home;