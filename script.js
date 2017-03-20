function run () {

    $('.diff-container .heading')
        .find('.aui-buttons:first')
        .append(
            $('<button>')
                .addClass('bb-min-button')
                .addClass('aui-button')
                .text('Minimize')
                .click(function (e) {

                    $(e.target)
                        .closest('div.diff-container')
                        .find('.diff-content-container')
                        .toggle();
                })
        );
}

if (!$('.bb-min-button').length) {
    run();
}
