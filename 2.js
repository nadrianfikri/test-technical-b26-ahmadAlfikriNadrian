const myLink = ['https://dumbways.id', 'https://finance.detik.com', 'https://support.hostinger.co.id', 'https://jdih.kominfo.go.id', 'https://mamikos.com'];

// Buatlah sebuah function untuk menyaring link yang memiliki subdomain.

const subDomain = myLink

  .map((point) => point.split('.'))

  .filter((index) => index.length > 2);

function getSubDomainOnly() {
  for (let i = 0; i < subDomain.length; i++) {
    let newDomain = subDomain[i].reduce((a, b) => {
      return a + '.' + b;
    });

    console.log(newDomain);
  }
}

getSubDomainOnly();
