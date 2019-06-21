document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('frame_url').focus();
    chrome.tabs.getSelected(null, function(tab) {
        document.getElementById('frame_url').value = tab.url;
        var loadURL = document.getElementById('load_url');
        loadURL.addEventListener('click', function() {
            document.getElementById('frame_id').src = document.getElementById('frame_url').value;
        }, false);
        var loadURLinc = document.getElementById('incognito');
        loadURLinc.addEventListener('click', function() {
            chrome.windows.create({
                "url": document.getElementById('frame_url').value,
                "incognito": true,
                "state": "maximized" //"fullscreen"
            });
        }, false);
    });
}, false);
