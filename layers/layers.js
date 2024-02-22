var wms_layers = [];

var format_N_DEP_FLA_000_0 = new ol.format.GeoJSON();
var features_N_DEP_FLA_000_0 = format_N_DEP_FLA_000_0.readFeatures(json_N_DEP_FLA_000_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N_DEP_FLA_000_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N_DEP_FLA_000_0.addFeatures(features_N_DEP_FLA_000_0);
var lyr_N_DEP_FLA_000_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_N_DEP_FLA_000_0, 
                style: style_N_DEP_FLA_000_0,
                interactive: true,
                title: '<img src="styles/legend/N_DEP_FLA_000_0.png" /> N_DEP_FLA_000'
            });
var format_fusionbtsacd_1 = new ol.format.GeoJSON();
var features_fusionbtsacd_1 = format_fusionbtsacd_1.readFeatures(json_fusionbtsacd_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fusionbtsacd_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fusionbtsacd_1.addFeatures(features_fusionbtsacd_1);
var lyr_fusionbtsacd_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fusionbtsacd_1, 
                style: style_fusionbtsacd_1,
                interactive: true,
    title: 'fusion btsa cd<br />\
    <img src="styles/legend/fusionbtsacd_1_0.png" /> CFA Caulnes<br />\
    <img src="styles/legend/fusionbtsacd_1_1.png" /> CFA de la Moselle<br />\
    <img src="styles/legend/fusionbtsacd_1_2.png" /> CFA de la Vienne<br />\
    <img src="styles/legend/fusionbtsacd_1_3.png" /> CFA de l\'ESA d\'Angers<br />\
    <img src="styles/legend/fusionbtsacd_1_4.png" /> CFA de l\'Indre<br />\
    <img src="styles/legend/fusionbtsacd_1_5.png" /> CFA de Merdrignac<br />\
    <img src="styles/legend/fusionbtsacd_1_6.png" /> CFA de Seine Maritime<br />\
    <img src="styles/legend/fusionbtsacd_1_7.png" /> CFA des Ardennes<br />\
    <img src="styles/legend/fusionbtsacd_1_8.png" /> CFA du Loiret<br />\
    <img src="styles/legend/fusionbtsacd_1_9.png" /> CFA du Lot et Garonne<br />\
    <img src="styles/legend/fusionbtsacd_1_10.png" /> CFA du Tarn<br />\
    <img src="styles/legend/fusionbtsacd_1_11.png" /> CFA Forma\'Terra à St Paul<br />\
    <img src="styles/legend/fusionbtsacd_1_12.png" /> CFA Le Robillard<br />\
    <img src="styles/legend/fusionbtsacd_1_13.png" /> CFPPA de Genech<br />\
    <img src="styles/legend/fusionbtsacd_1_14.png" /> Ecole des Etablières de La Roche Sur Yon<br />\
    <img src="styles/legend/fusionbtsacd_1_15.png" /> EPLEFPA de Châlons en Champagne<br />\
    <img src="styles/legend/fusionbtsacd_1_16.png" /> EPLEFPA de Quétigny Plombières Les Dijon<br />\
    <img src="styles/legend/fusionbtsacd_1_17.png" /> IAHP de Genech<br />\
    <img src="styles/legend/fusionbtsacd_1_18.png" /> Institut privé Ch. Quentin de Pierrefonds<br />\
    <img src="styles/legend/fusionbtsacd_1_19.png" /> LAP de Sainte Maure<br />\
    <img src="styles/legend/fusionbtsacd_1_20.png" /> LEAP de Pommerit Jaudy<br />\
    <img src="styles/legend/fusionbtsacd_1_21.png" /> LEAP La Touche de Ploermel<br />\
    <img src="styles/legend/fusionbtsacd_1_22.png" /> LEGTA Aix Valabre<br />\
    <img src="styles/legend/fusionbtsacd_1_23.png" /> LEGTA Amiens le Paraclet<br />\
    <img src="styles/legend/fusionbtsacd_1_24.png" /> LEGTA Bourg les Valence<br />\
    <img src="styles/legend/fusionbtsacd_1_25.png" /> LEGTA Carcassonne<br />\
    <img src="styles/legend/fusionbtsacd_1_26.png" /> LEGTA Croix Rivail<br />\
    <img src="styles/legend/fusionbtsacd_1_27.png" /> LEGTA Dax<br />\
    <img src="styles/legend/fusionbtsacd_1_28.png" /> LEGTA de Châteauroux<br />\
    <img src="styles/legend/fusionbtsacd_1_29.png" /> LEGTA de la Thiérache<br />\
    <img src="styles/legend/fusionbtsacd_1_30.png" /> LEGTA de l\'Oise<br />\
    <img src="styles/legend/fusionbtsacd_1_31.png" /> LEGTA E. de Chambray<br />\
    <img src="styles/legend/fusionbtsacd_1_32.png" /> LEGTA Fontaines<br />\
    <img src="styles/legend/fusionbtsacd_1_33.png" /> LEGTA La Côte Saint André<br />\
    <img src="styles/legend/fusionbtsacd_1_34.png" /> LEGTA \'le Robillard\'<br />\
    <img src="styles/legend/fusionbtsacd_1_35.png" /> LEGTA Metz Courcelles Chaussy<br />\
    <img src="styles/legend/fusionbtsacd_1_36.png" /> LEGTA Obernai<br />\
    <img src="styles/legend/fusionbtsacd_1_37.png" /> LEGTA Poitiers Venours<br />\
    <img src="styles/legend/fusionbtsacd_1_38.png" /> LEGTA Toulouse<br />\
    <img src="styles/legend/fusionbtsacd_1_39.png" /> LEGTA Yvetot<br />\
    <img src="styles/legend/fusionbtsacd_1_40.png" /> LEGTPA d\'Auxerre<br />\
    <img src="styles/legend/fusionbtsacd_1_41.png" /> Lycée de Pouillé des Ponts de Cé<br />\
    <img src="styles/legend/fusionbtsacd_1_42.png" /> MFREO de Campagne Les Boulonnais<br />\
    <img src="styles/legend/fusionbtsacd_1_43.png" /> MFREO de Coqueréaumont<br />\
    <img src="styles/legend/fusionbtsacd_1_44.png" /> MFREO du Haut Vaucluse<br />\
    <img src="styles/legend/fusionbtsacd_1_45.png" /> Site d\'Arras du CFPPA du Pas de Calais<br />\
    <img src="styles/legend/fusionbtsacd_1_46.png" /> Site d\'Arras du LEGTA du Pas de Calais<br />\
    <img src="styles/legend/fusionbtsacd_1_47.png" /> Site d\'Auch du LEGTA Auch Beaulieu Lavacant<br />\
    <img src="styles/legend/fusionbtsacd_1_48.png" /> Site de Castelnaudary de l\'Institut Saint Joseph<br />\
    <img src="styles/legend/fusionbtsacd_1_49.png" /> Site de Moissac du CFPPA du Tarn et Garonne<br />\
    <img src="styles/legend/fusionbtsacd_1_50.png" /> Site de Nermont du LEAP de Nermont<br />\
    <img src="styles/legend/fusionbtsacd_1_51.png" /> Site Montardon du CFPPA des Pyrénées Atlantiques<br />\
    <img src="styles/legend/fusionbtsacd_1_52.png" /> Site Yvetot du CFPPA de Seine Maritime agricole<br />\
    <img src="styles/legend/fusionbtsacd_1_53.png" /> <br />'
        });

lyr_N_DEP_FLA_000_0.setVisible(true);lyr_fusionbtsacd_1.setVisible(true);
var layersList = [lyr_N_DEP_FLA_000_0,lyr_fusionbtsacd_1];
lyr_N_DEP_FLA_000_0.set('fieldAliases', {'ID': 'ID', 'NOM_M': 'NOM_M', 'NOM': 'NOM', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'x': 'x', 'y': 'y', 'id_1': 'id_1', });
lyr_fusionbtsacd_1.set('fieldAliases', {'nom': 'nom', 'layer': 'layer', 'path': 'path', });
lyr_N_DEP_FLA_000_0.set('fieldImages', {'ID': 'TextEdit', 'NOM_M': 'TextEdit', 'NOM': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'x': 'Range', 'y': 'Range', 'id_1': 'TextEdit', });
lyr_fusionbtsacd_1.set('fieldImages', {'nom': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_N_DEP_FLA_000_0.set('fieldLabels', {'ID': 'no label', 'NOM_M': 'no label', 'NOM': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'x': 'no label', 'y': 'no label', 'id_1': 'no label', });
lyr_fusionbtsacd_1.set('fieldLabels', {'nom': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_fusionbtsacd_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});