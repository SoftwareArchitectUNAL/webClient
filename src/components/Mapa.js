import React, { Component } from 'react';
import * as d3 from "d3";

import localidades from './localidades_bogota.json';
import {allScore} from '../data.json'


import './Mapa.css';

class Mapa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "",
            allScore
        }
    }

    matcher() {
        let arr =[]
        let scoLoc = []

        const a = this.state.allScore.map((sco,i) =>{

          arr.push(sco.locality)
          arr.push(sco.score)
          scoLoc.push(arr)
          arr=[]
          console.log(sco.locality)
        })


        let votLoc = [["Bosa","8000"],["Usme", "50"]];

        return scoLoc;
    }

    componentDidMount() {
        var margin = { top: 20, bottom: 20, right: 20, left: 20 };
        var width = "800";
        var height = "800";
        var svg = d3.select("svg");

        let votLoc = this.matcher();


        var path = d3.geoPath()
            .projection(
                d3.geoTransverseMercator()
                    .fitExtent(
                        [
                            [margin.left, margin.top],
                            [width - margin.right, height - margin.bottom]
                        ],
                        localidades
                    )
            );

        svg.selectAll("path")
            .data(localidades.features)
            .enter().append("path")
            .style(
                "fill",
                (d) => {
                    let nomLoc =  d.properties.name;
                    let value = "rgb(255,255,255)";


                    votLoc.forEach(element => {
                        if (element[0]=== nomLoc) {

                            if (parseInt(element[1], 10) === 0) {
                                return value;
                            } else if (parseInt(element[1], 10) <= 25) {
                                return value = 'rgb(255, 0, 0)';
                            } else if (parseInt(element[1], 10) <= 50) {
                                return value = 'rgb(255, 66, 66)';
                            } else if (parseInt(element[1], 10) <= 75) {
                                return value = 'rgb(222, 222, 254)';
                            } else if (parseInt(element[1], 10) <= 100) {
                                return value = 'rgb(211, 211, 253)';
                            } else if (parseInt(element[1], 10) <= 200) {
                                return value = 'rgb(200,200,253)';
                            } else if (parseInt(element[1], 10) <= 300) {
                                return value = 'rgb(189,189,252)';
                            } else if (parseInt(element[1], 10) <= 400) {
                                return value = 'rgb(178,178,252)';
                            } else if (parseInt(element[1], 10) <= 500) {
                                return value = 'rgb(167,167,251)';
                            } else if (parseInt(element[1], 10) <= 600) {
                                return value = 'rgb(156,156,251)';
                            } else if (parseInt(element[1], 10) <= 700) {
                                return value = 'rgb(145,145,250)';
                            } else if (parseInt(element[1], 10) <= 800) {
                                return value = 'rgb(134,134,250)';
                            } else if (parseInt(element[1], 10) <= 900) {
                                return value = 'rgb(123,123,249)';
                            } else if (parseInt(element[1], 10) <= 1000) {
                                return value = 'rgb(250,20,20)';
                            } else if (parseInt(element[1], 10) <= 2000) {
                                return value = 'rgb(250,40,60)';
                            } else if (parseInt(element[1], 10) <= 3000) {
                                return value = 'rgb(90,90,248)';
                            } else if (parseInt(element[1], 10) <= 4000) {
                                return value = 'rgb(79,79,247)';
                            } else if (parseInt(element[1], 10) <= 5000) {
                                return value = 'rgb(68,68,247)';
                            } else if (parseInt(element[1], 10) <= 6000) {
                                return value = 'rgb(39,39,246)';
                            } else if (parseInt(element[1], 10) <= 8000) {
                                return value = 'rgb(255, 214, 30 )';
                            }

                        }
                    })
                    return value
                }
            )
            .attr("class", "tract")
            .attr("d", path)
            .append("title")
            .text(
                (d) => {
                    let text;
                    let nomLoc = d.properties.name;
                    votLoc.forEach(element => {
                        if (element[0] === nomLoc) {
                            text = nomLoc + ": " + element[1]
                        }
                    })
                    return text;
                }
            );

        svg.selectAll(".tract-border")
            .data(localidades.features)
            .enter()
            .append("path")
            .attr("class", "tract-border")
            .attr("d", path);
    }


    render() {

        return (
            <svg viewBox="0 0 800 800" width="100%" height="100%">

            </svg>
        )
    }
}

export default Mapa;
