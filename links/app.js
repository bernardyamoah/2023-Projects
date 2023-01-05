
const shareButtons = document.querySelectorAll('.tile-share-button')


// var notification = alertify.notify(link, 'success', 5, shareButtons.forEach(shareButton=> shareButton.addEventListener('click', copyText)));
async function copyText(e){
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try{
    await navigator.clipboard.writeText(link)
    swal("Good job!", link , "success")
    }
    catch(err){
    console.log(err)
    }
}

 shareButtons.forEach(shareButton=> shareButton.addEventListener('click', copyText))