const url = require('url');
const adress= `https://www.facebook.com/profile.php?id=100008627411918&lst=100041194923297%3A100008627411918%3A1589277308&sk=about`;
const parsedUrl= url.parse(adress, true);
console.log(parsedUrl.host);
// console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query.sk);

