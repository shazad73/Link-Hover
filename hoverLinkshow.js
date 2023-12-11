<script>
    var offsetX = -180; // Adjust this value to control horizontal distance
    var offsetY = -40; // Adjust this value to control vertical distance

    function showPopup(text, event) {
        var popup = document.getElementById('popup');
        popup.innerHTML = text;
        popup.style.display = 'block';
        setPosition(event.clientX, event.clientY);
    }

    function hidePopup() {
        var popup = document.getElementById('popup');
        popup.style.display = 'none';
    }

    function setPosition(x, y) {
        var popup = document.getElementById('popup');
        popup.style.left = x + offsetX + 'px';
        popup.style.top = y + offsetY + window.scrollY + 'px';
    }

    document.addEventListener("mousemove", function (event) {
        var popup = document.getElementById('popup');
        if (popup.style.display === 'block') {
            setPosition(event.clientX, event.clientY);
        }
    });
</script>
