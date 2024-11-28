const $sec = document.getElementById('sec1')
console.log($sec);

const $article = document.querySelector('article')
console.log($article);

$article.innerText = '<span>Replace</span>'
// $article.innerHTML = '<span>Replace</span>'
console.log($article.id);


const $contentPosts = document.querySelectorAll('article p')
console.log($contentPosts);

for (const paraph of $contentPosts) {
    // console.log(paraph.textContent);
    // Add Event
    // Function tradi
    paraph.addEventListener('mouseenter', function(event) {
        console.log(this); // La balise qui q déclenchée l'event
        this.innerText = "J'ai changé le contenu"
        console.log(event);
    })
    // Function =>
    // paraph.addEventListener('mouseenter', (e) => {
        // console.log(this); // window
        // console.log(e.currentTarget)
    // })
}

const $input = document.getElementById('nom')
$input.addEventListener('input', e => console.log(e.currentTarget.value))