"use strict";
import { paintings } from './data.js';

let gallery = {
    paintings: paintings,
    userInput: {
        selectedSort: 'price',
        selectedArtist: 'all'
    },
    applyAll: function() {

    },
    filterPaintings: function(){

    },
    initEvents: function() {

    },
    renderPaintings: function() {
        console.log('Render');
    },
    sortPaintings: function() {

    }
};

gallery.renderPaintings();