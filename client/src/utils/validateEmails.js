const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default (emails) => {

  const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => regexp.test(email) === false);


    if (invalidEmails.length && invalidEmails[invalidEmails.length-1].length === 0){
      return 'No trailing commas allowed';
    }
    if(invalidEmails.length) {
      return `These emails are invalid: ${invalidEmails}`;
    }


};