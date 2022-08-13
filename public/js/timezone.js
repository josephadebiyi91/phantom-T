const methods = [
    // 'toJSON', 'toISOString', 'toGMTString', 'toUTCString',
    'toString'
    
    // 'toLocaleString', 'toLocaleDateString', 'toLocaleTimeString',
    // 'getTime', 'getTimezoneOffset'
  ];
  
  const list = document.getElementById("date-list");
  const currentUTC = document.getElementById("current-utc");
  const currentISO = document.getElementById("current-iso");
  
  const updateDateTime = () => {
    const date = new Date();
    
    list.innerHTML = methods.reduce((a, m) => {
      const text = date[m]();
      return [ ...a, `<li><span class="method">${m}:</span> ${text}</li>` ];
    }, []).join('');
    
    // get current locale time as UTC
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    currentUTC.innerHTML = date.toISOString();
    currentISO.innerHTML = date.toString();
    
    new Intl.DateTimeFormat(navigator.language, { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(date)
  }
  
  setInterval(updateDateTime, 1000);


//   Second timezone