var nowLoading = (function() {

  var load = function(targetId, icon) {
    if (!targetId) return;
    var target = document.getElementById(targetId);

    var img = document.createElement('img');
    img.src = icon;

    var wrapper = document.createElement('div');
    wrapper.style.textAlign = 'center';
    wrapper.appendChild(img);

    target.appendChild(wrapper);
  };

  var done = function(targetId, content) {
    if (!targetId) return;
    var target = document.getElementById(targetId);

    target.innerHTML = '';

    if (isElement(content)) {
      target.appendChild(content);
    }
  };

  var isElement = function(obj) {
    try {
      return obj instanceof HTMLElement;
    }
    catch(e){
      return (typeof obj==="object") &&
        (obj.nodeType===1) && (typeof obj.style === "object") &&
        (typeof obj.ownerDocument ==="object");
    }
  };

  return {
    load: load,
    done: done
  };
}());
