// List of Followers
// let followersAsString = "jeanprince09,esmethebarbarian,eddiebull,docq,johntravolta06"
// let followersAsArray = followersAsString.split(",")

let followers = [
    "jeanprince09",
    "esmethebarbarian",
    "eddiebull",
    "docq",
    "johntravolta06",
    "mickyminaj",
    "getgood1337",
]

let pets = ["rock", "bat", "wombat", "taz devil"]

let displayFollowers = function (followers, title) {
    let html = ""
    for (let index = 0; index < followers.length; index += 1) {
        let username = followers[index]

        html += `<li>${username}</li>`
    }

    document.write(`
        <h3>${title}</h3>
        <ol>${html}</ol>
    `)
}

displayFollowers(followers, "Followers")
displayFollowers(pets, "List of Awesome Pets")

// Create gallery of random images
// https://picsum.photos/seed/${randomNumber}/200/300




let generateSeeds = function (total=6) {
    let seeds = []
    for (let count = 0; count < total; count += 1) {
        seeds.push(Math.random())
    }

    return seeds
}


let seeds = null
if (localStorage.getItem("seeds") === null) {
    seeds = generateSeeds()
    localStorage.setItem("seeds", seeds)
} else {
    seeds = localStorage.getItem("seeds").split(",")
}



let displayImageGallery = function (seeds, width=200, height=300) {
    let html = ""
    for (let index = 0; index < seeds.length; index += 1) {
        let seed = seeds[index]
        let url = `https://picsum.photos/seed/${seed}/${width}/${height}`

        html += `
            <img src="${url}" alt="Randomly-selected image">
        `
    }

    document.write(`
        <main>${html}</main>
    `)
}

displayImageGallery(seeds)
// let randomIntegerInRange = function (min=1, max=100) {
//     return Math.floor(Math.random() * max) + min
// }