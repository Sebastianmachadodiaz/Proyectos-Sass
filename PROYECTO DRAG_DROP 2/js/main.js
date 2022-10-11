
const dropItems=document.getElementById('drop-items')

new Sortable(dropItems, {
    animation: 350,
});

new Sortable(dropItems,{
    animation:150,
    chosenClass:"sortable-chosen",
    dragClass:"chortable-drag",
});
