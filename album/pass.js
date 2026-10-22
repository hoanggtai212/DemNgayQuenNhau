window.checkAlbumPassCode=function(step,entered){const passwords={1:"1",2:"2",3:"3"};return Object.prototype.hasOwnProperty.call(passwords,step)&&String(entered)===passwords[step]};
