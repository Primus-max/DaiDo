
export default () => ({
    app: {
        quit() {
            window.open('', '_self', '')
            console.log('work')
            window.close()
        }
    },
    clipboard:{
        readText() {
            return 'https://exampl.ru'
        }
    }
})
