var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},a=e.parcelRequire30ab;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in t){var a=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,a.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},e.parcelRequire30ab=a);var i=a("jqz8H"),o=a("cX88K");!async function(){const e=await(0,o.getDimensions)();new(0,i.Chart)(document.getElementById("dimensions"),{type:"bubble",data:{labels:e.map((e=>e.year)),datasets:[{label:"Dimensions",data:e.map((e=>({x:e.width,y:e.height,r:e.count})))}]}})}();
//# sourceMappingURL=index.042dd296.js.map