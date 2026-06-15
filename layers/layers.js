var wms_layers = [];


        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_RencanaPolaRuangKebomasFix_1 = new ol.format.GeoJSON();
var features_RencanaPolaRuangKebomasFix_1 = format_RencanaPolaRuangKebomasFix_1.readFeatures(json_RencanaPolaRuangKebomasFix_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RencanaPolaRuangKebomasFix_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RencanaPolaRuangKebomasFix_1.addFeatures(features_RencanaPolaRuangKebomasFix_1);
var lyr_RencanaPolaRuangKebomasFix_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RencanaPolaRuangKebomasFix_1, 
                style: style_RencanaPolaRuangKebomasFix_1,
                popuplayertitle: 'Rencana Pola Ruang Kebomas Fix',
                interactive: true,
    title: 'Rencana Pola Ruang Kebomas Fix<br />\
    <img src="styles/legend/RencanaPolaRuangKebomasFix_1_0.png" /> Badan Air<br />\
    <img src="styles/legend/RencanaPolaRuangKebomasFix_1_1.png" /> Garis Sepadan Sungai<br />\
    <img src="styles/legend/RencanaPolaRuangKebomasFix_1_2.png" /> Jalan Tol<br />\
    <img src="styles/legend/RencanaPolaRuangKebomasFix_1_3.png" /> Jaringan Jalan<br />\
    <img src="styles/legend/RencanaPolaRuangKebomasFix_1_4.png" /> Kantor<br />\
    <img src="styles/legend/RencanaPolaRuangKebomasFix_1_5.png" /> Mixeduse<br />\
    <img src="styles/legend/RencanaPolaRuangKebomasFix_1_6.png" /> Industri<br />\
    <img src="styles/legend/RencanaPolaRuangKebomasFix_1_7.png" /> Pembangkit Tenaga Listrik<br />\
    <img src="styles/legend/RencanaPolaRuangKebomasFix_1_8.png" /> Perdagangan dan Jasa Skala Kota<br />\
    <img src="styles/legend/RencanaPolaRuangKebomasFix_1_9.png" /> Perdagangan dan Jasa Skala SWP<br />\
    <img src="styles/legend/RencanaPolaRuangKebomasFix_1_10.png" /> Permukiman Kepadatan Tinggi<br />\
    <img src="styles/legend/RencanaPolaRuangKebomasFix_1_11.png" /> Permukiman Kepadatan Sedang<br />\
    <img src="styles/legend/RencanaPolaRuangKebomasFix_1_12.png" /> SPU Skala Kota<br />\
    <img src="styles/legend/RencanaPolaRuangKebomasFix_1_13.png" /> SPU Skala Kecamatan<br />\
    <img src="styles/legend/RencanaPolaRuangKebomasFix_1_14.png" /> SPU Skala Kelurahan<br />\
    <img src="styles/legend/RencanaPolaRuangKebomasFix_1_15.png" /> Jalur Hijau<br />\
    <img src="styles/legend/RencanaPolaRuangKebomasFix_1_16.png" /> Sawah<br />\
    <img src="styles/legend/RencanaPolaRuangKebomasFix_1_17.png" /> RTH<br />\
    <img src="styles/legend/RencanaPolaRuangKebomasFix_1_18.png" /> Taman Kota<br />\
    <img src="styles/legend/RencanaPolaRuangKebomasFix_1_19.png" /> Taman Kecamatan<br />\
    <img src="styles/legend/RencanaPolaRuangKebomasFix_1_20.png" /> Taman Kelurahaan<br />\
    <img src="styles/legend/RencanaPolaRuangKebomasFix_1_21.png" /> Taman RW<br />' });
var format_SubWilayahPerencanaanKebomas_2 = new ol.format.GeoJSON();
var features_SubWilayahPerencanaanKebomas_2 = format_SubWilayahPerencanaanKebomas_2.readFeatures(json_SubWilayahPerencanaanKebomas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SubWilayahPerencanaanKebomas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SubWilayahPerencanaanKebomas_2.addFeatures(features_SubWilayahPerencanaanKebomas_2);
var lyr_SubWilayahPerencanaanKebomas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SubWilayahPerencanaanKebomas_2, 
                style: style_SubWilayahPerencanaanKebomas_2,
                popuplayertitle: 'Sub Wilayah Perencanaan Kebomas',
                interactive: true,
                title: '<img src="styles/legend/SubWilayahPerencanaanKebomas_2.png" /> Sub Wilayah Perencanaan Kebomas'
            });

lyr_ESRIWorldTopo_0.setVisible(true);lyr_RencanaPolaRuangKebomasFix_1.setVisible(true);lyr_SubWilayahPerencanaanKebomas_2.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr_RencanaPolaRuangKebomasFix_1,lyr_SubWilayahPerencanaanKebomas_2];
lyr_RencanaPolaRuangKebomasFix_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'PolaRuang': 'PolaRuang', 'KodaZona': 'KodaZona', 'Luas': 'Luas', 'Id': 'Id', 'layer': 'layer', 'path': 'path', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'Kelas': 'Kelas', 'Luas_Ha': 'Luas_Ha', });
lyr_SubWilayahPerencanaanKebomas_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Batas_SWP': 'Batas_SWP', 'Batas_Blok': 'Batas_Blok', });
lyr_RencanaPolaRuangKebomasFix_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'PolaRuang': 'TextEdit', 'KodaZona': 'TextEdit', 'Luas': 'TextEdit', 'Id': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'Kelas': 'TextEdit', 'Luas_Ha': '', });
lyr_SubWilayahPerencanaanKebomas_2.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Batas_SWP': 'TextEdit', 'Batas_Blok': 'TextEdit', });
lyr_RencanaPolaRuangKebomasFix_1.set('fieldLabels', {'KDPPUM': 'hidden field', 'NAMOBJ': 'hidden field', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDBBPS': 'hidden field', 'KDBPUM': 'hidden field', 'WADMKD': 'hidden field', 'WIADKD': 'hidden field', 'WADMKC': 'hidden field', 'WIADKC': 'hidden field', 'WADMKK': 'hidden field', 'WIADKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADPR': 'hidden field', 'TIPADM': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'PolaRuang': 'header label - visible with data', 'KodaZona': 'hidden field', 'Luas': 'hidden field', 'Id': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'Kelas': 'hidden field', 'Luas_Ha': 'hidden field', });
lyr_SubWilayahPerencanaanKebomas_2.set('fieldLabels', {'KDPPUM': 'hidden field', 'NAMOBJ': 'hidden field', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDBBPS': 'hidden field', 'KDBPUM': 'hidden field', 'WADMKD': 'hidden field', 'WIADKD': 'hidden field', 'WADMKC': 'hidden field', 'WIADKC': 'hidden field', 'WADMKK': 'hidden field', 'WIADKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADPR': 'hidden field', 'TIPADM': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'Batas_SWP': 'header label - visible with data', 'Batas_Blok': 'header label - visible with data', });
lyr_SubWilayahPerencanaanKebomas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});