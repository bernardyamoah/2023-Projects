const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)



async function copyText(e){
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try{
    await navigator.clipboard.writeText(link)
    alert('copied the text:' + link)
    }
    catch(err){
    console.log(err)
    }
}

shareButtons.forEach(shareButton=> shareButton.addEventListener('click', copyText))