function layDuLieuTextTuHTML(htmlString) {
    var parser = new DOMParser();
    var htmlDoc = parser.parseFromString(htmlString, 'text/html');
    var textFromHTML = htmlDoc.body.getElementsByTagName("p")[0].innerText;
    return textFromHTML;
}