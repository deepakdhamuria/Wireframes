(function(window, undefined) {
  var dictionary = {
    "1f3410d9-f2dc-40b0-a5a2-841cc7733b4c": "Diapers",
    "5a1cea91-5f6e-4c36-afbf-a8ef83bc5ec8": "SubCategDiapers",
    "a4ff3fd0-d45d-401e-b42d-d54af49ea3f2": "launch",
    "ba01d6b6-0023-4070-a211-c77ea4fb40a3": "payment",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Main",
    "4f7d773d-6d8f-49f8-94ae-194e4109eff5": "AllProducts",
    "2d4b6726-8d7f-4791-bed1-4b31da36d7eb": "ProductSter",
    "6b0b5086-02f4-4399-b7ac-f70f436e52df": "cart",
    "55a84348-af81-4f24-8f28-b7c9329c4757": "SubCategFeeding",
    "9b6ee94d-f174-44a6-b737-a8313d90de54": "address",
    "2528b274-9b61-4b84-b8ab-37919ed1f172": "Product",
    "d990be30-4d59-4d16-a7c2-c9d11fbc343b": "Splash",
    "9411675a-59b4-4db9-a002-2d6e3b6444f7": "review",
    "3f7dd1a2-3d47-4424-97dd-e9d1713fd4b7": "Confirmation",
    "9497ff18-dd3d-46fc-aadc-95bd5176d75e": "search",
    "0aa1474c-a78e-4962-8a93-4d383573b124": "Inner Pages",
    "e193d356-a1d3-4740-8593-becb747410b9": "Deeper Pages",
    "7b82072e-26bc-46b1-807c-0945468fe1f7": "Product Page",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Main Pages",
    "50c1a37f-5caa-465f-9e61-892b37be7231": "Launch",
    "298db5c9-fb64-4f45-9603-1e95519c98ae": "Guest"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);