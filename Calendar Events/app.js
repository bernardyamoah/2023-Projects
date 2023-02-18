
const shareButtons = document.querySelectorAll('.tile-share-button')



async function copyText(e){
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try{
    await navigator.clipboard.writeText(link)
    // swal("Good job!","Link has been successfully copied!", "success")

    // // Izi toast
        iziToast.success({
            title: 'Success',
            message: 'Successfully copied!',
        overlay: true,
        
        zindex: 999,
        });

    }
    catch(err){
        iziToast.error({
            title: 'Error',
            message: err,
        });
        // swal ( "Oops" , err,  "error" )
    }
}

 shareButtons.forEach(shareButton=> shareButton.addEventListener('click', copyText))
