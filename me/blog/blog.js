/* blog.js */


const table = document.getElementById("table");
const container = document.getElementById("postContainer");

async function loadJSON() {
    const response = await fetch("posts.json")
    const posts = await response.json();
    
				generatePosts(posts);
				//generateTable(posts);
}


// hey stupid, remember to add image support to the json file
async function generatePosts(posts) {
		for (i = 0; i < posts.posts.length; i++) {
				const a = document.createElement("a");
				a.href =  posts.posts[i].link;


				const div = document.createElement("div");
				div.classList.add("post");

				const thumbnail = document.createElement("img");
				thumbnail.classList.add("postImg");
				thumbnail.src = "noImage.png";
				
				const text = document.createElement("p");
				text.innerText = posts.posts[i].title + " - " + posts.posts[i].date;
				


				div.append(thumbnail);
				div.append(text);
		
				a.append(div);
				container.append(a);
		}
}


/*
async function generateTable(posts) {
		for (i = 0; i < posts.posts.length; i++) {
        const row = document.createElement("tr");

        const title = document.createElement("th");
        title.innerHTML = posts.posts[i].title;

        const date = document.createElement("th");
        date.innerHTML = posts.posts[i].date;

        const tags = document.createElement("th");
        tags.innerHTML = posts.posts[i].tags;

        const link = document.createElement("th");
        const hypr = document.createElement("a");
        hypr.innerHTML = posts.posts[i].link;
        hypr.href = posts.posts[i].link;
        link.append(hypr);

        row.append(title);
        row.append(date);
        row.append(tags);
        row.append(link);

        table.append(row);
				}
}
*/

loadJSON()
