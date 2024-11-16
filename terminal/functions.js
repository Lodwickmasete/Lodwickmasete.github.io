function fetchPackage() {
    var link = 'https://raw.githubusercontent.com/Lodwickmasete/wick.js/main/wick.js';
    return checkFileExists(link).then(exists => {
        if (exists) {
            download(link);
            return 1; // success
        } else {
            console.error("File does not exist at the specified URL.");
            return 0; // error
        }
    });
}

function checkFileExists(url) {
    return fetch(url, { method: 'HEAD' })
        .then(response => response.ok) // returns true if the file exists
        .catch(() => false); // returns false if an error occurs
}

function download(url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function install() {
    return 0; // Simulate failure for demonstration
}