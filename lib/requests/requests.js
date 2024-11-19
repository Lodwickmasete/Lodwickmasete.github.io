const requests = {
  get: function (url, onSuccess, onError) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          onSuccess(JSON.parse(xhr.responseText));
        } else {
          if (onError) onError(xhr.statusText);
        }
      }
    };
    xhr.send();
  },

  post: function (url, data, onSuccess, onError) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          onSuccess(JSON.parse(xhr.responseText));
        } else {
          if (onError) onError(xhr.statusText);
        }
      }
    };
    xhr.send(JSON.stringify(data));
  },

  put: function (url, data, onSuccess, onError) {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          onSuccess(JSON.parse(xhr.responseText));
        } else {
          if (onError) onError(xhr.statusText);
        }
      }
    };
    xhr.send(JSON.stringify(data));
  },

  delete: function (url, onSuccess, onError) {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          onSuccess(JSON.parse(xhr.responseText));
        } else {
          if (onError) onError(xhr.statusText);
        }
      }
    };
    xhr.send();
  },
};
