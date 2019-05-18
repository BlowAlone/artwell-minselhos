window.onload= function() {
        document.getElementById('toggler').onclick = function() {
            openlist('subj-list', this);
            return false;
        };
    };
    function openlist(id, toggler) {
        var list = document.getElementById(id);
        if (list.style.display == 'block') {
            list.style.display = 'none';
        }
        else {
            list.style.display = 'block';
        }
    }
    