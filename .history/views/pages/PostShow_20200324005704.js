import Utils        from './../../services/Utils.js'
import myObj        from './../../services/api.js'

let getPost = async (id) => {
    const options = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   };
   try {
       const response = await fetch(myObj. + 'id', options)
       const json = await response.json();
       // console.log(json)
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
}

let PostShow = {

    render : async () => {
        let request = Utils.parseRequestURL()
        let post = await getPost(request.id)
        
        return /*html*/`
            <section class="section">
                <h1> Post Id : ${post.id}</h1>
                <p> Post Title : ${post.fecha} </p>
                <p> Post Content : ${post.content} </p>
                <p> Post Author : ${post.name} </p>
            </section>
        `
    }
    , after_render: async () => {
    }
}

export default PostShow;