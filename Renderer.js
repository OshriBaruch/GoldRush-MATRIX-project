class Renderer {
    renderBoard(Matrix) {
        $("#container").empty();
        let source = $('#matrix-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template({ Matrix });
        $('#container').append(newHTML);
    }
    renderScore(score) {
        $("#footer").empty();
        let source = $('#score-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template(score);
        $('#footer').append(newHTML);
    }
}

