// Alternative à l'usage de l'event onload (cf. slides)
document.addEventListener('DOMContentLoaded', () => {
    // Enoncé 1
    // Tout l'html est bien chargé
    const $colorSelected = document.getElementById('color')
    // $colorSelected.addEventListener('change', function() {
        //     document.body.style.backgroundColor = this.value
        // })
        $colorSelected.addEventListener('change', (e) => {
            document.body.style.backgroundColor = e.currentTarget.value
        })
        
    // Enoncé 2
    const oldTitle = "Mon ancien titre"
    const $h1 = document.getElementById('title')
    $h1.addEventListener('mouseenter', function() {
        this.innerText = "Mon nouveau titre"
    })
    $h1.addEventListener('mouseleave', function() {
        this.innerText = oldTitle
    })
    const $h2 = document.getElementById('title2')
    $h2.addEventListener('mouseenter', function() {
        this.innerText = "Mon nouveau titre"
    })
    $h2.addEventListener('mouseleave', function() {
        this.innerText = oldTitle
    })
   
    // Enoncé 4
    const $btn = document.getElementById('btn')
    const $input = document.querySelector('input')
    $btn.addEventListener('mouseenter', function() {
        // Test if input is empty => btn move
        // test
        if ($input.value === "") {
        // if (!$input.value) {
            // Fuit
            this.style.display = 'block'
            this.style.marginLeft = Math.random() * 300 + 'px'
            this.style.marginTop = Math.random() * 300 + 'px'
        }
    })
    $input.addEventListener('input', () => {
        if ($input.value) {
            // Fuit
            $btn.style.display = 'inline'
            $btn.style.marginLeft = '0px'
            $btn.style.marginTop = '0px'
        }
    })
})