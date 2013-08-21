( function () {
    "use strict";

    var loader = new Script("lib/requirejs/require.min.js");
    var script = new Script("http://doc.herlock.do/data/inspector_view.js");
    var loaded = 0;
    
    loader.onload = onLoaded;
    script.onload = onLoaded;
    
    function onLoaded() {
        if (++loaded == 2) init();
    }
    
    function init() {
        require.config({
            baseUrl: "."
        });
        
        require(["app/main"]);
    }
} )();