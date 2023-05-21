window.addEventListener('DOMContentLoaded', function() {
  var footerPlaceholder = document.getElementById('footer-placeholder');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '../app/footer.html', true);
  xhr.onreadystatechange = function() {
     if (xhr.readyState === 4 && xhr.status === 200) {
        footerPlaceholder.innerHTML = xhr.responseText;
     }
  };
  xhr.send();
});