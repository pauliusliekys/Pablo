'use strict';

$(document).ready(function(){

$(window).scroll(function() {
    var top = $(window).scrollTop();
    
    if ( top > 0 ) {
        $('header').addClass('header-white');
    } else {
        $('header').removeClass('header-white');
    }
});



function services_list () {
    var HTML = '';
    
    for ( var i=0; i<3; i++ ) {
        HTML = HTML + '<div class="service">\
                            <i class="fa fa-facebook"></i>\
                            <h3>Web design</h3>\
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque.</p>\
                        </div>';
    }
    
    return HTML;
}

$('.services-list').html( services_list() );











portfolio();

function portfolio(){
    var portfolio_filter_HTML = '',
        portfolio_results_HTML = '',
        data = [
            ['home.jpg', 'Illustration work', 'zirafa'],
            ['home.jpg', 'Banana', 'kate'],
            ['Banana 2', 'kate'],
            ['home.jpg', 'Banana 3'],
            ['home.jpg', 'Yo mama!', 'suo'],
            ['home.jpg', 'Banana 3', 'kate'],
            ['home.jpg', 'Banana 3', 'kate'],
            ['home.jpg', 'Banana 3', 'kate'],
            ['home.jpg', 'Banana 3', 'kate']
        ];
    
    portfolio_filter_HTML = filter_generator(data);
    portfolio_results_HTML = results_generator(data);
        
    $('#portfolio .filter').html( portfolio_filter_HTML );
    $('#portfolio .results').html( portfolio_results_HTML );
    return;
}

function filter_generator( arr ){
    var HTML = '<div class="filter-item active">All</div>',
        arr_len = arr.length,
        pasikartojantis = false,
        counter = 0;
    
    for ( var i=0; i<arr_len; i++ ) {
        pasikartojantis = false;
        for ( var j=0; j<i; j++ ) {
            if ( arr[i][2] == arr[j][2] ) {
                pasikartojantis = true;
                break;
            }
            counter++;
        }
        if ( pasikartojantis == false ) {
            HTML = HTML + '<div class="filter-item">'+ arr[i][2] +'</div>';
        }
    }
    console.log(counter);
    return HTML;
}


function results_generator( brr ){
    var HTML = '',
        brr_len = brr.length;
    
    for ( var i=0; i<brr_len; i++ ) {
        HTML += '<div class="block" style="background-image: url(img/'+ brr[i][0] +');">\
                    <div class="extra">\
                        <h3>'+ brr[i][1] +'</h3>\
                        <div>'+ brr[i][2] +'</div>\
                    </div>\
                </div>';
    }
    
    return HTML;
}

var array = [{ id: 1, saved: 0, name: "name1" }, { id: 26, saved: 0, name: "name2" }, { id: 3, saved: 0, name: "name3" }, { id: 15, saved: 0, name: "name4" }],
    index = array.findIndex(({ id }) => id === 15);

console.log(index);

});