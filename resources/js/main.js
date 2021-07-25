window.mainApp = {
    setup: async (title) => {
        console.log('Setting up window');
        await Neutralino.window.setTitle(title)
        const icon = '/resources/icons/notes.png';
        await Neutralino.window.setIcon(icon);
    },
    openGitHub: async () => {
        Neutralino.app.open({
            url: 'https://github.com/tolu1'
        });
    },
    disableZoom: () => {
        $(document).keydown((event) => {
            if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  )) {                
                event.preventDefault();
            }
        });

        $(window).on('mousewheel DOMMouseScroll', (event) => {
            if (event.ctrlKey == true) {            
                event.preventDefault();
            }
        });
    }
};

Neutralino.init();
window.mainApp.setup('');
window.mainApp.disableZoom()
