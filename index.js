const r=require("readline-sync"),s=require("./storyMap");let u="${username}",g=!1;const c=e=>void 0===e.guilty||e.guilty===g;function a(e){const t=s[e],n=t.substitution?u:"";if(console.log(t.text,n),t.action&&d(t.action),t.choices){p(t.choices.filter(c))}}function p(e){let t=e.map(e=>e.text);const n=r.keyInSelect(t,"",{cancel:"Quit",hideEchoBack:!0,mask:""});n<0?(console.log("Thanks for reading!"),process.exit()):a(e[n].next)}function d(e){switch(e){case"enterName":const t="Enter username\n(or press Ctrl-C to exit): ";return u=r.question(t)||"${username}",a("audience");case"steal":return g=!0}}a("start");