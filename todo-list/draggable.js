
document.addEventListener("DOMContentLoaded", function (event) {

    var slidesElem = document.querySelector('.todo-list');
    var slideSize = getSize(document.querySelector('.todo'));
    var pckry = new Packery(slidesElem, {
        rowHeight: slideSize.outerHeight
    });
    // get item elements
    var itemElems = pckry.getItemElements();


    // for each item...
    for (var i = 0, len = itemElems.length; i < len; i++) {
        var elem = itemElems[i];
        // make element draggable with Draggabilly
        var draggie = new Draggabilly(elem, {
            axis: 'y'
        });
        // bind Draggabilly events to Packery
        pckry.bindDraggabillyEvents(draggie);
    }

    // re-sort DOM after item is positioned
    pckry.on('dragItemPositioned', function (_pckry, draggedItem) {
        var index = pckry.items.indexOf(draggedItem);
        var nextItem = pckry.items[index + 1];

        if (nextItem) {
            slidesElem.insertBefore(draggedItem.element, nextItem.element);
        } else {
            slidesElem.appendChild(draggedItem.element);
        }

    });

});
