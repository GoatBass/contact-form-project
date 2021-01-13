$(function(){
    $('#send').click(function(event){
        event.preventDefault()

        localStorage.setItem('name', $('#name').val())
        localStorage.setItem('email', $('#email').val())
        localStorage.setItem('message', $('#message').val())
    })
})

$(function(){
    $('#reset').click(function(event){
        event.preventDefault()

        $('#name').val('')
        $('#email').val('')
        $('#message').val('')

    })
})