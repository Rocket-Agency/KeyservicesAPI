const db = require('../models');
const Address = db.address;
const Ad = db.ad;
const Housing = db.housing;
const Installation = db.installation;
const Equipment = db.equipment;
const Info = db.info;
const Rule = db.rule;
const Price = db.price;
addressController = require('../controllers/address');

require('dotenv').config();

exports.adCreate = (req, res) =>{

    Address.create({ //Création de l'address
        address_road_number : req.body.address_road_number,
        address_road_type : req.body.address_road_type,
        address_road_name : req.body.address_road_name,
        address_additional_info : req.body.address_additional_info,
        address_state :  req.body.address_state,
        address_city : req.body.address_city,
        address_zip_code : req.body.address_zip_code,
        address_txt :  req.body.address_road_number+' '+req.body.address_road_type+' '
                    +req.body.address_road_name+' '+req.body.address_zip_code+' ,'+req.body.address_city,
        deleted : ' ',
        address_primaire : 0,
        address_user_id : req.body.userId,
    }).then(address => {
        Equipment.create({ //Création de l'equipement de la maison 
            equipment_kitchen : req.body.equipment_kitchen,
            equipment_heater : req.body.equipment_heater,
            equipment_wifi : req.body.equipment_wifi,
            equipment_iron	 : req.body.equipment_iron,
            equipment_working_space :  req.body.equipment_working_space,
            equipment_private_bathroom : req.body.equipment_private_bathroom,
            equipment_shampoo : req.body.equipment_shampoo,
            equipment_air_conditioner :  req.body.equipment_air_conditioner,
            equipment_hangers : req.body.equipment_hangers,
            equipment_hair_dryer : req.body.equipment_hair_dryer,
            equipment_television : req.body.equipment_television,
        }).then(equipment =>{
            Installation.create({ //Création des installation
                installation_parking : req.body.installation_parking,
                installation_gym : req.body.installation_gym,
                installation_pool : req.body.installation_pool,
                installation_jaccuzi : req.body.installation_jaccuzi,
            }).then(installation =>{
                Info.create({ //Création des information utiles
                    info_infos : req.body.info_infos,
                    info_availability : req.body.info_availability,
                    info_area : req.body.info_area,
                    info_around : req.body.info_around,
                    info_stairs : req.body.info_stairs,
                    info_noise : req.body.info_noise,
                    info_pets : req.body.info_pets,
                    info_no_parking : req.body.info_no_parking,
                    info_shared_space : req.body.info_shared_space,
                    info_equipment_restriction : req.body.info_equipment_restriction,
                    info_monitoring_device : req.body.info_monitoring_device,
                    info_weapons : req.body.info_weapons,
                    info_dangerous_animals : req.body.info_dangerous_animals,
                }).then(info=>{
                    Rule.create({ //Création des Régle
                        rule_age_2_12 : req.body.rule_age_2_12,
                        rule_age_2 : req.body.rule_age_2,
                        rule_pets : req.body.rule_pets,
                        rule_smoking : req.body.rule_smoking,
                        rule_event : req.body.rule_event,
                        rule_add : req.body.rule_add,
                    }).then(rule =>{
                        Housing.create({ //Creation de la table housing
                            housing_type_property : req.body.housing_type_property,
                            housing_type : req.body.housing_type,
                            housing_nb_room : req.body.housing_nb_room,
                            housing_nb_bathroom : req.body.housing_nb_bathroom,
                            housing_observation : req.body.housing_observation,
                            housing_adress_id : address.dataValues.address_id,
                            housing_equipment_id : equipment.dataValues.equipment_id,
                            housing_installation_id : installation.dataValues.installation_id,
                            housing_info_id : info.dataValues.info_id,
                            housing_rule_id : rule.dataValues.rule_id,
                        }).then(housing =>{
                            Price.create({
                                price_starting : req.body.price_starting,
                                price_min : req.body.price_min,
                                price_max : req.body.price_max,
                            }).then(price =>{
                                Ad.create({
                                    ad_title : req.body.ad_title,
                                    ad_description : req.body.ad_description,
                                    ad_capacity : req.body.ad_capacity,
                                    ad_notice : req.body.ad_notice,
                                    ad_arrival_time : req.body.ad_arrival_time,
                                    ad_departure_time : req.body.ad_departure_time,
                                    ad_min_night : req.body.ad_min_night,
                                    ad_max_night : req.body.ad_max_night,
                                    ad_starting_date : req.body.ad_starting_date,
                                    ad_ending_date : req.body.ad_ending_date,
                                    ad_housing_id : housing.dataValues.housing_id,
                                    ad_user_id : req.body.userId,
                                    ad_housing_price_id : price.dataValues.price_id,
                                })
                            })
                        })
                    })
                })
            })
        })
        res.status(200).send({ message: "Ad was registered successfully!" });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
    });
};
