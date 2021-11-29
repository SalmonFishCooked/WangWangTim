var labels = document.querySelectorAll('.userinput label')
var loginBtn = document.querySelector('.content-down .button')
var username = document.getElementById('username')
var password = document.getElementById('password')

loginBtn.onclick = function() {
    if (username.value === '') {
        labels[0].style.display = 'inline-block'
    }
    if (password.value === '') {
        labels[1].style.display = 'inline-block'
    }
    
    // POST
    if (username.value != '' && password.value != '') {
        $.ajax({
            url: '/api/login',
            method: 'POST',
            data: {
                username: username.value,
                password: password.value
            },
            success: function(response) {
                console.log(response)
            }
        })
    }
}

username.onchange = function() {
    if (username.value === '') {
        labels[0].style.display = 'inline-block'
    } else {
        labels[0].style.display = 'none'
    }
}

password.onchange = function() {
    if (password.value === '') {
        labels[1].style.display = 'inline-block'
    } else {
        labels[1].style.display = 'none'
    }
}