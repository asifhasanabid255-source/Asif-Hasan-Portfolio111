const https = require('https');
const fs = require('fs');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { rejectUnauthorized: false }, function(response) {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', function() {
        file.close(resolve);
      });
    }).on('error', function(err) {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

Promise.all([
  download('https://i.postimg.cc/K8wcFq91/Asif-Hasan-png-2K-20260910173948.jpg', 'public/logo.jpg'),
  download('https://i.postimg.cc/cJ2CkzjV/abid.png', 'public/hero.png')
]).then(() => console.log('Downloaded successfully'))
  .catch(err => console.error('Failed to download', err));
