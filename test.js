class fbCommand extends Command
    init: ->
        @command='/tasykles'
        @parseType='exact'
        @rankPrivelege='user'

    functionality: ->
        resp = '/me Testuojam luko bota ! :D'
        API.sendChat resp
