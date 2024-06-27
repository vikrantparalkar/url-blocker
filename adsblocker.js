chrome.webRequest.onBeforeRequest.addListener(
    function(details) { 
      // console.log(details)
      return {cancel: true}; 
    },
    {urls: 
      ["*://*.instagram.net/*",
      "*://*.youtube.com/*"]
      // add more urls
    },
    ["blocking"]
  );


