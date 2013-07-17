describe 'Github', ->

    it 'exists', ->
        github = new Github()
        expect(github).not.toBe(null)

    it 'can fetch my user data', ->
        github = new Github()
        me = github.user('melindavoo')