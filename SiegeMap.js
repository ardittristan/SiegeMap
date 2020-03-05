const L = require('leaflet');
require('leaflet-edgebuffer');
require('leaflet.control.layers.tree');
require('./libs/L.Control.BoxZoom/leaflet-control-boxzoom');
L.RasterCoords = require('leaflet-rastercoords');

//* global vars
// server adress
var serverAdress = "https://ardittristan.xyz/SiegeMapFiles/";
// image size
var img = [1600, 900];

//* init map

var map = L.map('map');

//* lay the coordinates out
var rc = new L.RasterCoords(map, img);
map.setMaxZoom(6);
map.setView(rc.unproject([img[0], img[1]]), 3);
map.setMaxBounds([[21.4, -180], [85.35, 101.35]]);

//* make all maps
//#region 
//! bank
//#region 
var bankF1 = addLayer("/bank/bank-floor-1", 1000);
var bankF2 = addLayer("/bank/bank-floor-2", 1000);
var bankF3 = addLayer("/bank/bank-floor-3", 1000);
var bankF4 = addLayer("/bank/bank-floor-4", 1000);

var bankO1 = new L.layerGroup([addOverlay("bank", 1), bankF1], { pane: 'tilePane' });
var bankO2 = new L.layerGroup([addOverlay("bank", 2), bankF2], { pane: 'tilePane' });
var bankO3 = new L.layerGroup([addOverlay("bank", 3), bankF3], { pane: 'tilePane' });
var bankO4 = new L.layerGroup([addOverlay("bank", 4), bankF4], { pane: 'tilePane' });
//#endregion


//! border
//#region 
var borderF1 = addLayer("/border/border-floor-1", 1000);
var borderF2 = addLayer("/border/border-floor-2", 1000);
var borderF3 = addLayer("/border/border-floor-3", 1000);

var borderO1 = new L.layerGroup([addOverlay("border", 1), borderF1], { pane: 'tilePane' });
var borderO2 = new L.layerGroup([addOverlay("border", 2), borderF2], { pane: 'tilePane' });
var borderO3 = new L.layerGroup([addOverlay("border", 4), borderF3], { pane: 'tilePane' });
//#endregion


//! chalet
//#region 
var chaletF1 = addLayer("/chalet/chalet-floor-1", 1000);
var chaletF2 = addLayer("/chalet/chalet-floor-2", 1000);
var chaletF3 = addLayer("/chalet/chalet-floor-3", 1000);
var chaletF4 = addLayer("/chalet/chalet-floor-4", 1000);

var chaletO1 = new L.layerGroup([addOverlay("chalet", 1), chaletF1], { pane: 'tilePane' });
var chaletO2 = new L.layerGroup([addOverlay("chalet", 2), chaletF2], { pane: 'tilePane' });
var chaletO3 = new L.layerGroup([addOverlay("chalet", 3), chaletF3], { pane: 'tilePane' });
var chaletO4 = new L.layerGroup([addOverlay("chalet", 4), chaletF4], { pane: 'tilePane' });
//#endregion


//! clubhouse
//#region 
var clubhouseF1 = addLayer("/clubhouse/clubhouse-floor-1", 1000);
var clubhouseF2 = addLayer("/clubhouse/clubhouse-floor-2", 1000);
var clubhouseF3 = addLayer("/clubhouse/clubhouse-floor-3", 1000);
var clubhouseF4 = addLayer("/clubhouse/clubhouse-floor-4", 1000);

var clubhouseO1 = new L.layerGroup([addOverlay("clubhouse", 1), clubhouseF1], { pane: 'tilePane' });
var clubhouseO2 = new L.layerGroup([addOverlay("clubhouse", 2), clubhouseF2], { pane: 'tilePane' });
var clubhouseO3 = new L.layerGroup([addOverlay("clubhouse", 3), clubhouseF3], { pane: 'tilePane' });
var clubhouseO4 = new L.layerGroup([addOverlay("clubhouse", 4), clubhouseF4], { pane: 'tilePane' });
//#endregion


//! coastline
//#region 
var coastlineF1 = addLayer("/coastline/coastline-floor-1", 1000);
var coastlineF2 = addLayer("/coastline/coastline-floor-2", 1000);
var coastlineF3 = addLayer("/coastline/coastline-floor-3", 1000);
var coastlineF4 = addLayer("/coastline/coastline-floor-4", 1000);

var coastlineO1 = new L.layerGroup([addOverlay("coastline", 1), coastlineF1], { pane: 'tilePane' });
var coastlineO2 = new L.layerGroup([addOverlay("coastline", 2), coastlineF2], { pane: 'tilePane' });
var coastlineO3 = new L.layerGroup([addOverlay("coastline", 3), coastlineF3], { pane: 'tilePane' });
var coastlineO4 = new L.layerGroup([addOverlay("coastline", 4), coastlineF4], { pane: 'tilePane' });
//#endregion


//! consulate
//#region 
var consulateF1 = addLayer("/consulate/consulate-floor-1", 1000);
var consulateF2 = addLayer("/consulate/consulate-floor-2", 1000);
var consulateF3 = addLayer("/consulate/consulate-floor-3", 1000);
var consulateF4 = addLayer("/consulate/consulate-floor-4", 1000);

var consulateO1 = new L.layerGroup([addOverlay("consulate", 1), consulateF1], { pane: 'tilePane' });
var consulateO2 = new L.layerGroup([addOverlay("consulate", 2), consulateF2], { pane: 'tilePane' });
var consulateO3 = new L.layerGroup([addOverlay("consulate", 3), consulateF3], { pane: 'tilePane' });
var consulateO4 = new L.layerGroup([addOverlay("consulate", 4), consulateF4], { pane: 'tilePane' });
//#endregion


//! favela
//#region 
var favelaF1 = addLayer("/favela/favela-floor-1", 1000);
var favelaF2 = addLayer("/favela/favela-floor-2", 1000);
var favelaF3 = addLayer("/favela/favela-floor-3", 1000);
var favelaF4 = addLayer("/favela/favela-floor-4", 1000);
var favelaF5 = addLayer("/favela/favela-floor-5", 1000);

var favelaO1 = new L.layerGroup([addOverlay("favela", 1), favelaF1], { pane: 'tilePane' });
var favelaO2 = new L.layerGroup([addOverlay("favela", 2), favelaF2], { pane: 'tilePane' });
var favelaO3 = new L.layerGroup([addOverlay("favela", 3), favelaF3], { pane: 'tilePane' });
var favelaO4 = new L.layerGroup([addOverlay("favela", 4), favelaF4], { pane: 'tilePane' });
var favelaO5 = new L.layerGroup([addOverlay("favela", 5), favelaF5], { pane: 'tilePane' });
//#endregion


//! fortress
//#region 
var fortressF1 = addLayer("/fortress/fortress-floor-1", 1000);
var fortressF2 = addLayer("/fortress/fortress-floor-2", 1000);
var fortressF3 = addLayer("/fortress/fortress-floor-3", 1000);

var fortressO1 = new L.layerGroup([addOverlay("fortress", 1), fortressF1], { pane: 'tilePane' });
var fortressO2 = new L.layerGroup([addOverlay("fortress", 2), fortressF2], { pane: 'tilePane' });
var fortressO3 = new L.layerGroup([addOverlay("fortress", 3), fortressF3], { pane: 'tilePane' });
//#endregion


//! hereford
//#region 
var herefordF1 = addLayer("/hereford/hereford-floor-1", 1000);
var herefordF2 = addLayer("/hereford/hereford-floor-2", 1000);
var herefordF3 = addLayer("/hereford/hereford-floor-3", 1000);
var herefordF4 = addLayer("/hereford/hereford-floor-4", 1000);
var herefordF5 = addLayer("/hereford/hereford-floor-5", 1000);

var herefordO1 = new L.layerGroup([addOverlay("hereford", 1), herefordF1], { pane: 'tilePane' });
var herefordO2 = new L.layerGroup([addOverlay("hereford", 2), herefordF2], { pane: 'tilePane' });
var herefordO3 = new L.layerGroup([addOverlay("hereford", 3), herefordF3], { pane: 'tilePane' });
var herefordO4 = new L.layerGroup([addOverlay("hereford", 4), herefordF4], { pane: 'tilePane' });
var herefordO5 = new L.layerGroup([addOverlay("hereford", 5), herefordF5], { pane: 'tilePane' });
//#endregion


//! house
//#region 
var houseF1 = addLayer("/house/house-floor-1", 1000);
var houseF2 = addLayer("/house/house-floor-2", 1000);
var houseF3 = addLayer("/house/house-floor-3", 1000);
var houseF4 = addLayer("/house/house-floor-4", 1000);

var houseO1 = new L.layerGroup([addOverlay("house", 1), houseF1], { pane: 'tilePane' });
var houseO2 = new L.layerGroup([addOverlay("house", 2), houseF2], { pane: 'tilePane' });
var houseO3 = new L.layerGroup([addOverlay("house", 3), houseF3], { pane: 'tilePane' });
var houseO4 = new L.layerGroup([addOverlay("house", 4), houseF4], { pane: 'tilePane' });
//#endregion


//! kafe
//#region 
var kafeF1 = addLayer("/kafe/kafe-floor-1", 1000);
var kafeF2 = addLayer("/kafe/kafe-floor-2", 1000);
var kafeF3 = addLayer("/kafe/kafe-floor-3", 1000);
var kafeF4 = addLayer("/kafe/kafe-floor-4", 1000);

var kafeO1 = new L.layerGroup([addOverlay("kafe", 1), kafeF1], { pane: 'tilePane' });
var kafeO2 = new L.layerGroup([addOverlay("kafe", 2), kafeF2], { pane: 'tilePane' });
var kafeO3 = new L.layerGroup([addOverlay("kafe", 3), kafeF3], { pane: 'tilePane' });
var kafeO4 = new L.layerGroup([addOverlay("kafe", 4), kafeF4], { pane: 'tilePane' });
//#endregion


//! kanal
//#region 
var kanalF1 = addLayer("/kanal/kanal-floor-1", 1000);
var kanalF2 = addLayer("/kanal/kanal-floor-2", 1000);
var kanalF3 = addLayer("/kanal/kanal-floor-3", 1000);
var kanalF4 = addLayer("/kanal/kanal-floor-4", 1000);
var kanalF5 = addLayer("/kanal/kanal-floor-5", 1000);

var kanalO1 = new L.layerGroup([addOverlay("kanal", 1), kanalF1], { pane: 'tilePane' });
var kanalO2 = new L.layerGroup([addOverlay("kanal", 2), kanalF2], { pane: 'tilePane' });
var kanalO3 = new L.layerGroup([addOverlay("kanal", 3), kanalF3], { pane: 'tilePane' });
var kanalO4 = new L.layerGroup([addOverlay("kanal", 4), kanalF4], { pane: 'tilePane' });
var kanalO5 = new L.layerGroup([addOverlay("kanal", 5), kanalF5], { pane: 'tilePane' });
//#endregion


//! oregon
//#region 
var oregonF1 = addLayer("/oregon/oregon-floor-1", 1000);
var oregonF2 = addLayer("/oregon/oregon-floor-2", 1000);
var oregonF3 = addLayer("/oregon/oregon-floor-3", 1000);
var oregonF4 = addLayer("/oregon/oregon-floor-4", 1000);
var oregonF5 = addLayer("/oregon/oregon-floor-5", 1000);

var oregonO1 = new L.layerGroup([addOverlay("oregon", 1), oregonF1], { pane: 'tilePane' });
var oregonO2 = new L.layerGroup([addOverlay("oregon", 2), oregonF2], { pane: 'tilePane' });
var oregonO3 = new L.layerGroup([addOverlay("oregon", 3), oregonF3], { pane: 'tilePane' });
var oregonO4 = new L.layerGroup([addOverlay("oregon", 4), oregonF4], { pane: 'tilePane' });
var oregonO5 = new L.layerGroup([addOverlay("oregon", 5), oregonF5], { pane: 'tilePane' });
//#endregion


//! outback
//#region 
var outbackF1 = addLayer("/outback/outback-floor-1", 1000);
var outbackF2 = addLayer("/outback/outback-floor-2", 1000);
var outbackF3 = addLayer("/outback/outback-floor-3", 1000);
var outbackF4 = addLayer("/outback/outback-floor-4", 1000);

var outbackO1 = new L.layerGroup([addOverlay("outback", 1), outbackF1], { pane: 'tilePane' });
var outbackO2 = new L.layerGroup([addOverlay("outback", 2), outbackF2], { pane: 'tilePane' });
var outbackO3 = new L.layerGroup([addOverlay("outback", 3), outbackF3], { pane: 'tilePane' });
var outbackO4 = new L.layerGroup([addOverlay("outback", 4), outbackF4], { pane: 'tilePane' });
//#endregion


//! plane
//#region 
var planeF1 = addLayer("/plane/plane-floor-1", 1000);
var planeF2 = addLayer("/plane/plane-floor-2", 1000);
var planeF3 = addLayer("/plane/plane-floor-3", 1000);
var planeF4 = addLayer("/plane/plane-floor-4", 1000);

var planeO1 = new L.layerGroup([addOverlay("plane", 1), planeF1], { pane: 'tilePane' });
var planeO2 = new L.layerGroup([addOverlay("plane", 2), planeF2], { pane: 'tilePane' });
var planeO3 = new L.layerGroup([addOverlay("plane", 3), planeF3], { pane: 'tilePane' });
var planeO4 = new L.layerGroup([addOverlay("plane", 4), planeF4], { pane: 'tilePane' });
//#endregion


//! skyscraper
//#region 
var skyscraperF1 = addLayer("/skyscraper/skyscraper-floor-1", 1000);
var skyscraperF2 = addLayer("/skyscraper/skyscraper-floor-2", 1000);
var skyscraperF3 = addLayer("/skyscraper/skyscraper-floor-3", 1000);
var skyscraperF4 = addLayer("/skyscraper/skyscraper-floor-4", 1000);

var skyscraperO1 = new L.layerGroup([addOverlay("skyscraper", 1), skyscraperF1], { pane: 'tilePane' });
var skyscraperO2 = new L.layerGroup([addOverlay("skyscraper", 2), skyscraperF2], { pane: 'tilePane' });
var skyscraperO3 = new L.layerGroup([addOverlay("skyscraper", 3), skyscraperF3], { pane: 'tilePane' });
var skyscraperO4 = new L.layerGroup([addOverlay("skyscraper", 4), skyscraperF4], { pane: 'tilePane' });
//#endregion


//! themepark
//#region 
var themeparkF1 = addLayer("/themepark/themepark-floor-1", 1000);
var themeparkF2 = addLayer("/themepark/themepark-floor-2", 1000);
var themeparkF3 = addLayer("/themepark/themepark-floor-3", 1000);

var themeparkO1 = new L.layerGroup([addOverlay("themepark", 1), themeparkF1], { pane: 'tilePane' });
var themeparkO2 = new L.layerGroup([addOverlay("themepark", 2), themeparkF2], { pane: 'tilePane' });
var themeparkO3 = new L.layerGroup([addOverlay("themepark", 3), themeparkF3], { pane: 'tilePane' });
//#endregion


//! tower
//#region 
var towerF1 = addLayer("/tower/tower-floor-1", 1000);
var towerF2 = addLayer("/tower/tower-floor-2", 1000);
var towerF3 = addLayer("/tower/tower-floor-3", 1000);
var towerF4 = addLayer("/tower/tower-floor-4", 1000);

var towerO1 = new L.layerGroup([addOverlay("tower", 1), towerF1], { pane: 'tilePane' });
var towerO2 = new L.layerGroup([addOverlay("tower", 2), towerF2], { pane: 'tilePane' });
var towerO3 = new L.layerGroup([addOverlay("tower", 3), towerF3], { pane: 'tilePane' });
var towerO4 = new L.layerGroup([addOverlay("tower", 4), towerF4], { pane: 'tilePane' });
//#endregion


//! villa
//#region 
var villaF1 = addLayer("/villa/villa-floor-1", 1000);
var villaF2 = addLayer("/villa/villa-floor-2", 1000);
var villaF3 = addLayer("/villa/villa-floor-3", 1000);
var villaF4 = addLayer("/villa/villa-floor-4", 1000);
var villaF5 = addLayer("/villa/villa-floor-5", 1000);

var villaO1 = new L.layerGroup([addOverlay("villa", 1), villaF1], { pane: 'tilePane' });
var villaO2 = new L.layerGroup([addOverlay("villa", 2), villaF2], { pane: 'tilePane' });
var villaO3 = new L.layerGroup([addOverlay("villa", 3), villaF3], { pane: 'tilePane' });
var villaO4 = new L.layerGroup([addOverlay("villa", 4), villaF4], { pane: 'tilePane' });
var villaO5 = new L.layerGroup([addOverlay("villa", 5), villaF5], { pane: 'tilePane' });
//#endregion


//! yacht
//#region 
var yachtF1 = addLayer("/yacht/yacht-floor-1", 1000);
var yachtF2 = addLayer("/yacht/yacht-floor-2", 1000);
var yachtF3 = addLayer("/yacht/yacht-floor-3", 1000);
var yachtF4 = addLayer("/yacht/yacht-floor-4", 1000);
var yachtF5 = addLayer("/yacht/yacht-floor-5", 1000).addTo(map);

var yachtO1 = new L.layerGroup([addOverlay("yacht", 1), yachtF1], { pane: 'tilePane' });
var yachtO2 = new L.layerGroup([addOverlay("yacht", 2), yachtF2], { pane: 'tilePane' });
var yachtO3 = new L.layerGroup([addOverlay("yacht", 3), yachtF3], { pane: 'tilePane' });
var yachtO4 = new L.layerGroup([addOverlay("yacht", 4), yachtF4], { pane: 'tilePane' });
var yachtO5 = new L.layerGroup([addOverlay("yacht", 5), yachtF5], { pane: 'tilePane' });
//#endregion
//#endregion


//* buttons
// layer selection
var baseTree = [
    {
        label: "Bank",
        collapsed: true,
        children: [
            {
                label: "Floor 1",
                layer: bankF1,
                children: [
                    {label: "Overlay", layer: bankO1}
                ]
            },
            {
                label: "Floor 2",
                layer: bankF2,
                children: [
                    {label: "Overlay", layer: bankO2}
                ]
            },
            {
                label: "Floor 3",
                layer: bankF3,
                children: [
                    {label: "Overlay", layer: bankO3}
                ]
            },
            {
                label: "Floor 4",
                layer: bankF4,
                children: [
                    {label: "Overlay", layer: bankO4}
                ]
            }
        ]
    },
    {
        label: "Border",
        collapsed: true,
        children: [
            {
                label: "Floor 1",
                layer: borderF1,
                children: [
                    {label: "Overlay", layer: borderO1}
                ]
            },
            {
                label: "Floor 2",
                layer: borderF2,
                children: [
                    {label: "Overlay", layer: borderO2}
                ]
            },
            {
                label: "Floor 3",
                layer: borderF3,
                children: [
                    {label: "Overlay", layer: borderO3}
                ]
            }
        ]
    },
    {
        label: "Chalet",
        collapsed: true,
        children: [
            {
                label: "Floor 1",
                layer: chaletF1,
                children: [
                    {label: "Overlay", layer: chaletO1}
                ]
            },
            {
                label: "Floor 2",
                layer: chaletF2,
                children: [
                    {label: "Overlay", layer: chaletO2}
                ]
            },
            {
                label: "Floor 3",
                layer: chaletF3,
                children: [
                    {label: "Overlay", layer: chaletO3}
                ]
            },
            {
                label: "Floor 4",
                layer: chaletF4,
                children: [
                    {label: "Overlay", layer: chaletO4}
                ]
            }
        ]
    },
    {
        label: "Clubhouse",
        collapsed: true,
        children: [
            {
                label: "Floor 1",
                layer: clubhouseF1,
                children: [
                    {label: "Overlay", layer: clubhouseO1}
                ]
            },
            {
                label: "Floor 2",
                layer: clubhouseF2,
                children: [
                    {label: "Overlay", layer: clubhouseO2}
                ]
            },
            {
                label: "Floor 3",
                layer: clubhouseF3,
                children: [
                    {label: "Overlay", layer: clubhouseO3}
                ]
            },
            {
                label: "Floor 4",
                layer: clubhouseF4,
                children: [
                    {label: "Overlay", layer: clubhouseO4}
                ]
            }
        ]
    },
    {
        label: "Coastline",
        collapsed: true,
        children: [
            {
                label: "Floor 1",
                layer: coastlineF1,
                children: [
                    {label: "Overlay", layer: coastlineO1}
                ]
            },
            {
                label: "Floor 2",
                layer: coastlineF2,
                children: [
                    {label: "Overlay", layer: coastlineO2}
                ]
            },
            {
                label: "Floor 3",
                layer: coastlineF3,
                children: [
                    {label: "Overlay", layer: coastlineO3}
                ]
            },
            {
                label: "Floor 4",
                layer: coastlineF4,
                children: [
                    {label: "Overlay", layer: coastlineO4}
                ]
            }
        ]
    },
    {
        label: "Consulate",
        collapsed: true,
        children: [
            {
                label: "Floor 1",
                layer: consulateF1,
                children: [
                    {label: "Overlay", layer: consulateO1}
                ]
            },
            {
                label: "Floor 2",
                layer: consulateF2,
                children: [
                    {label: "Overlay", layer: consulateO2}
                ]
            },
            {
                label: "Floor 3",
                layer: consulateF3,
                children: [
                    {label: "Overlay", layer: consulateO3}
                ]
            },
            {
                label: "Floor 4",
                layer: consulateF4,
                children: [
                    {label: "Overlay", layer: consulateO4}
                ]
            }
        ]
    },
    {
        label: "Favela",
        collapsed: true,
        children: [
            {
                label: "Floor 1",
                layer: favelaF1,
                children: [
                    {label: "Overlay", layer: favelaO1}
                ]
            },
            {
                label: "Floor 2",
                layer: favelaF2,
                children: [
                    {label: "Overlay", layer: favelaF2}
                ]
            },
            {
                label: "Floor 3",
                layer: favelaF3,
                children: [
                    {label: "Overlay", layer: favelaO3}
                ]
            },
            {
                label: "Floor 4",
                layer: favelaF4,
                children: [
                    {label: "Overlay", layer: favelaO4}
                ]
            },
            {
                label: "Floor 5",
                layer: favelaF5,
                children: [
                    {label: "Overlay", layer: favelaO5}
                ]
            }
        ]
    },
    {
        label: "Fortress",
        collapsed: true,
        children: [
            {
                label: "Floor 1",
                layer: fortressF1,
                children: [
                    {label: "Overlay", layer: fortressO1}
                ]
            },
            {
                label: "Floor 2",
                layer: fortressF2,
                children: [
                    {label: "Overlay", layer: fortressO2}
                ]
            },
            {
                label: "Floor 3",
                layer: fortressF3,
                children: [
                    {label: "Overlay", layer: fortressO3}
                ]
            }
        ]
    },
    {
        label: "Hereford",
        collapsed: true,
        children: [
            {
                label: "Floor 1",
                layer: herefordF1,
                children: [
                    {label: "Overlay", layer: herefordO1}
                ]
            },
            {
                label: "Floor 2",
                layer: herefordF2,
                children: [
                    {label: "Overlay", layer: herefordO2}
                ]
            },
            {
                label: "Floor 3",
                layer: herefordF3,
                children: [
                    {label: "Overlay", layer: herefordO3}
                ]
            },
            {
                label: "Floor 4",
                layer: herefordF4,
                children: [
                    {label: "Overlay", layer: herefordO4}
                ]
            },
            {
                label: "Floor 5",
                layer: herefordF5,
                children: [
                    {label: "Overlay", layer: herefordO5}
                ]
            }
        ]
    },
    {
        label: "House",
        collapsed: true,
        children: [
            {
                label: "Floor 1",
                layer: houseF1,
                children: [
                    {label: "Overlay", layer: houseO1}
                ]
            },
            {
                label: "Floor 2",
                layer: houseF2,
                children: [
                    {label: "Overlay", layer: houseO2}
                ]
            },
            {
                label: "Floor 3",
                layer: houseF3,
                children: [
                    {label: "Overlay", layer: houseO3}
                ]
            },
            {
                label: "Floor 4",
                layer: houseF4,
                children: [
                    {label: "Overlay", layer: houseO4}
                ]
            }
        ]
    },
    {
        label: "Kafe",
        collapsed: true,
        children: [
            {
                label: "Floor 1",
                layer: kafeF1,
                children: [
                    {label: "Overlay", layer: kafeO1}
                ]
            },
            {
                label: "Floor 2",
                layer: kafeF2,
                children: [
                    {label: "Overlay", layer: kafeO2}
                ]
            },
            {
                label: "Floor 3",
                layer: kafeF3,
                children: [
                    {label: "Overlay", layer: kafeO3}
                ]
            },
            {
                label: "Floor 4",
                layer: kafeF4,
                children: [
                    {label: "Overlay", layer: kafeO4}
                ]
            }
        ]
    },
    {
        label: "Kanal",
        collapsed: true,
        children: [
            {
                label: "Floor 1",
                layer: kanalF1,
                children: [
                    {label: "Overlay", layer: kanalO1}
                ]
            },
            {
                label: "Floor 2",
                layer: kanalF2,
                children: [
                    {label: "Overlay", layer: kanalO2}
                ]
            },
            {
                label: "Floor 3",
                layer: kanalF3,
                children: [
                    {label: "Overlay", layer: kanalO3}
                ]
            },
            {
                label: "Floor 4",
                layer: kanalF4,
                children: [
                    {label: "Overlay", layer: kanalO4}
                ]
            },
            {
                label: "Floor 5",
                layer: kanalF5,
                children: [
                    {label: "Overlay", layer: kanalO5}
                ]
            }
        ]
    },
    {
        label: "Oregon",
        collapsed: true,
        children: [
            {
                label: "Floor 1",
                layer: oregonF1,
                children: [
                    {label: "Overlay", layer: oregonO1}
                ]
            },
            {
                label: "Floor 2",
                layer: oregonF2,
                children: [
                    {label: "Overlay", layer: oregonO2}
                ]
            },
            {
                label: "Floor 3",
                layer: oregonF3,
                children: [
                    {label: "Overlay", layer: oregonO3}
                ]
            },
            {
                label: "Floor 4",
                layer: oregonF4,
                children: [
                    {label: "Overlay", layer: oregonO4}
                ]
            },
            {
                label: "Floor 5",
                layer: oregonF5,
                children: [
                    {label: "Overlay", layer: oregonO5}
                ]
            }
        ]
    },
    {
        label: "Outback",
        collapsed: true,
        children: [
            {
                label: "Floor 1",
                layer: outbackF1,
                children: [
                    {label: "Overlay", layer: outbackO1}
                ]
            },
            {
                label: "Floor 2",
                layer: outbackF2,
                children: [
                    {label: "Overlay", layer: outbackO2}
                ]
            },
            {
                label: "Floor 3",
                layer: outbackF3,
                children: [
                    {label: "Overlay", layer: outbackO3}
                ]
            },
            {
                label: "Floor 4",
                layer: outbackF4,
                children: [
                    {label: "Overlay", layer: outbackO4}
                ]
            }
        ]
    },
    {
        label: "Plane",
        collapsed: true,
        children: [
            {
                label: "Floor 1",
                layer: planeF1,
                children: [
                    {label: "Overlay", layer: planeO1}
                ]
            },
            {
                label: "Floor 2",
                layer: planeF2,
                children: [
                    {label: "Overlay", layer: planeO2}
                ]
            },
            {
                label: "Floor 3",
                layer: planeF3,
                children: [
                    {label: "Overlay", layer: planeO3}
                ]
            },
            {
                label: "Floor 4",
                layer: planeF4,
                children: [
                    {label: "Overlay", layer: planeO4}
                ]
            }
        ]
    },
    {
        label: "Skyscraper",
        collapsed: true,
        children: [
            {
                label: "Floor 1",
                layer: skyscraperF1,
                children: [
                    {label: "Overlay", layer: skyscraperO1}
                ]
            },
            {
                label: "Floor 2",
                layer: skyscraperF2,
                children: [
                    {label: "Overlay", layer: skyscraperO2}
                ]
            },
            {
                label: "Floor 3",
                layer: skyscraperF3,
                children: [
                    {label: "Overlay", layer: skyscraperO3}
                ]
            },
            {
                label: "Floor 4",
                layer: skyscraperF4,
                children: [
                    {label: "Overlay", layer: skyscraperO4}
                ]
            }
        ]
    },
    {
        label: "Themepark",
        collapsed: true,
        children: [
            {
                label: "Floor 1",
                layer: themeparkF1,
                children: [
                    {label: "Overlay", layer: themeparkO1}
                ]
            },
            {
                label: "Floor 2",
                layer: themeparkF1,
                children: [
                    {label: "Overlay", layer: themeparkO2}
                ]
            },
            {
                label: "Floor 3",
                layer: themeparkF3,
                children: [
                    {label: "Overlay", layer: themeparkO3}
                ]
            }
        ]
    },
    {
        label: "Tower",
        collapsed: true,
        children: [
            {
                label: "Floor 1",
                layer: towerF1,
                children: [
                    {label: "Overlay", layer: towerO1}
                ]
            },
            {
                label: "Floor 2",
                layer: towerF2,
                children: [
                    {label: "Overlay", layer: towerO2}
                ]
            },
            {
                label: "Floor 3",
                layer: towerF3,
                children: [
                    {label: "Overlay", layer: towerO3}
                ]
            },
            {
                label: "Floor 4",
                layer: towerF4,
                children: [
                    {label: "Overlay", layer: towerO4}
                ]
            }
        ]
    },
    {
        label: "Villa",
        collapsed: true,
        children: [
            {
                label: "Floor 1",
                layer: villaF1,
                children: [
                    {label: "Overlay", layer: villaO1}
                ]
            },
            {
                label: "Floor 2",
                layer: villaF2,
                children: [
                    {label: "Overlay", layer: villaO2}
                ]
            },
            {
                label: "Floor 3",
                layer: villaF3,
                children: [
                    {label: "Overlay", layer: villaO3}
                ]
            },
            {
                label: "Floor 4",
                layer: villaF4,
                children: [
                    {label: "Overlay", layer: villaO4}
                ]
            },
            {
                label: "Floor 5",
                layer: villaF5,
                children: [
                    {label: "Overlay", layer: villaO5}
                ]
            }
        ]
    },
    {
        label: "Yacht",
        collapsed: true,
        children: [
            {
                label: "Floor 1",
                layer: yachtF1,
                children: [
                    {label: "Overlay", layer: yachtO1}
                ]
            },
            {
                label: "Floor 2",
                layer: yachtF2,
                children: [
                    {label: "Overlay", layer: yachtO2}
                ]
            },
            {
                label: "Floor 3",
                layer: yachtF3,
                children: [
                    {label: "Overlay", layer: yachtO3}
                ]
            },
            {
                label: "Floor 4",
                layer: yachtF4,
                children: [
                    {label: "Overlay", layer: yachtO4}
                ]
            },
            {
                label: "Floor 5",
                layer: yachtF5,
                children: [
                    {label: "Overlay", layer: yachtO5}
                ]
            }
        ]
    }
];
L.control.layers.tree(baseTree, [], { collapsed: false }).addTo(map);

// zoom control
L.Control.boxzoom({
    position: 'topleft'
}).addTo(map);

//* functions
function addLayer(/** @type {string} */ location, /** @type {number} */ index) {
    return L.tileLayer('./SiegeMapsFiles' + location + '/{z}/{x}/{y}.png', {
        bounds: [[21.4, -180], [85.35, 101.35]],
        noWrap: true,
        edgeBufferTiles: 2,
        zIndexOffset: index
    });
}

function addOverlay(/** @type {string} */ mapName, /** @type {number} */ floorNumber) {
    return L.imageOverlay(serverAdress + mapName + "/Floor-" + floorNumber + ".png",
        [[21.4, -180], [85.35, 101.35]],
        { zIndex: 100 }
    );
}
