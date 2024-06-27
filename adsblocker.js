chrome.webRequest.onBeforeRequest.addListener(
    function(details) { 
      // console.log(details)
      return {cancel: true}; 
    },
    {urls: 
      ["*://*.instagram.com/*",
      "*://*.youtube.com/*"]
      // add more urls
    },
    ["blocking"]
  );


