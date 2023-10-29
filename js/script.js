document.addEventListener('DOMContentLoaded', function() {

    // carusel
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        duration: 500,
        numVisible: 3,
        fullWidth: false,
        indicators: true
    });

    // collapsible
    var elems2 = document.querySelectorAll('.collapsible');
    var instances2 = M.Collapsible.init(elems2, {
        accordion: false
    });

    // dropdown
    var elems3 = document.querySelectorAll('.dropdown-trigger');
    var instances3 = M.Dropdown.init(elems3, {
        hover: true
    });

    // FeatureDiscovery
    var elems4 = document.querySelector('.tap-target');
    var instances4 = M.TapTarget.init(elems4, {});
    var instance = M.TapTarget.getInstance(elems4)

    document.getElementById('btnOpen').onclick = () => {
        instance.open()
    }
  });