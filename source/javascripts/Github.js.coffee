Github = ->

Github::user = (user) ->
    @url = "https://api.github.com/users/" + user + "?callback=?"
    
    $.getJSON @url, (data) ->
        window.data = data.data

    return window.data

window.Github = Github

# this is 