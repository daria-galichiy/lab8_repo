$('#plot').click(function(e){
    e.preventDefault();
    from = parseFloat($('input[id=from]').val());
    to = parseFloat($('input[id=to]').val());
    func = $('input[id=func]').val();
    points = [];

    for(var i = from; i < to; i+=0.1)
    {
        x = i;
        y = eval(func);
        points.push([x, y]);
    }

    $.plot(
        $('#display'),
        [{
            label: func,
            data: points,
            color: "#4500ff"
        }],
        {}
    );
});
