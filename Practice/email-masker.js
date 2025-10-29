const emailMask = (email) => {
  const [name, domain] = email.split('@');
  const maskedName =
    name[0] + '*'.repeat(Math.max(name.length - 2, 1)) + name.split(-1);
  return `${maskedName}@${domain}`;
};

let email = '22kartiksanil@gmail.com';
console.log(emailMask(email));
