const posts = [{name:"person_1", post:"post1 from person1 "},
                {name:"person2", post:"post2 from person2"}]

const list_posts = () => {
    posts.map( (post) => {
        console.log("Post from ", post.name, ". Post : ", post.post);
    })
}

const add_person = (new_person) => {
    return new Promise( (response, reject) => {
        if(new_person){
            response("New person added from post list");
            posts.push(new_person)
        }else {
            reject("Something went wrong :( ");
        }
    })
}


async function add_and_list_posts () {
    await add_person({name:"person4", post:"post3 from person4"});
    list_posts();
}

add_and_list_posts()