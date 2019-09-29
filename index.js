jQuery(document).ready(function() {

function buildHtml(labelCategory, max, borne, dateUpdated, updatedBy) {

    return html = '<div class="form-inline">'+
            '<div class="form-group mb-2">'+
                '<label for="categoryType" class="sr-only">'+labelCategory+'</label>'+
                '<input type="text" readonly class="form-control-plaintext" id="categoryType" value="'+labelCategory+'">'+
              '</div>'+
              '<div class="form-group mx-sm-3 mb-2">'+
                '<label for="max" class="sr-only">'+max+'</label>'+
                '<input type="text" readonly class="form-control" id="max" placeholder="'+max+'">'+
              '</div>'+
              '<div class="form-group mx-sm-3 mb-2">'+
                '<label for="max" class="sr-only">'+borne+'</label>'+
                '<input type="text" readonly class="form-control" id="max" placeholder="'+borne+'">'+
              '</div>'+
              '<div class="form-group mb-2">'+
                '<label for="categoryType" class="sr-only">'+dateUpdated+'</label>'+
                '<input type="text" readonly class="form-control-plaintext" id="categoryType" value="'+dateUpdated+'">'+
              '</div>'+
              '<div class="form-group mb-2">'+
                '<label for="categoryType" class="sr-only">'+updatedBy+'</label>'+
                '<input type="text" readonly class="form-control-plaintext" id="categoryType" value="'+updatedBy+'">'+
              '</div>'+
            '</div>';

}
var myTree = [
    {
      text: buildHtml('test12',2, 3, '12/12/2019', '12/11/2019'),
      nodes: [
        {
          text: buildHtml('test1',2, 3, '12/11/2019', '12/11/2019'),
          nodes: [
            {
              text: buildHtml('test2',20, 3, '12/12/2019', '12/11/2019'),
            },
            {
              text: buildHtml('test3',2, 84, '12/03/2019', '12/11/2019'),
            }
          ]
        },
        {
          text: buildHtml('test4',20, 33, '12/09/2019', '12/11/2019'),
        }
      ]
    },
    {
      text: buildHtml('test5',52, 66, '12/12/2019', '12/11/2019'),
    },
    {
      text: buildHtml('test6',32, 13, '12/09/2019', '12/11/2019'),
    }
];

    jQuery('#default-tree').treeview({
        data: myTree,
        // expanded to 2 levels
        levels: 4,
        // custom icons
        /*expandIcon: 'glyphicon glyphicon-plus',
        collapseIcon: 'glyphicon glyphicon-minus',
        emptyIcon: 'glyphicon',
        nodeIcon: '',
        selectedIcon: '',
        checkedIcon: 'glyphicon glyphicon-check',
        uncheckedIcon: 'glyphicon glyphicon-unchecked',

        // colors
        color: undefined, // '#000000',
        backColor: undefined, // '#FFFFFF',
        borderColor: undefined, // '#dddddd',
        onhoverColor: '#F5F5F5',
        selectedColor: '#FFFFFF',
        selectedBackColor: '#428bca',
        searchResultColor: '#D9534F',
        searchResultBackColor: undefined, //'#FFFFFF',
        // enables links
        enableLinks: false,
        // highlights selected items
        highlightSelected: true,
        // highlights search results
        highlightSearchResults: true,
        // shows borders
        showBorder: true,
        // shows icons
        showIcon: true,
        // shows checkboxes
        showCheckbox: false,
        // shows tags
        showTags: false,
        // enables multi select
        multiSelect: falses*/
    });
});
