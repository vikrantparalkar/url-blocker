chrome.webRequest.onBeforeRequest.addListener(
    function(details) { 
      // console.log(details)
      return {cancel: true}; 
    },
    {urls: 
      ["*://*.doubleclick.net/*",
      "*://*.w3schools.com/*"]
      // add more urls
    },
    ["blocking"]
  );


