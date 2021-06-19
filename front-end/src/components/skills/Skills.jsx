import React from 'react'
import styles from './Skills.module.css'
import {useEffect} from 'react'
import {useRef} from 'react'
import {useState} from 'react'
import header from "./Rectangle.png"
import desk from './desk.jpeg'
import hardSkillsSrc from './dode.jpg'
import softSkillsSrc from './devTeam.jpg'
import * as d3 from "d3"
import useWindowSize from './UseWindowSize'

function Skills() {

    // const windowSize = useWindowSize();

    const [svgSize, setSvgSize] = useState({ width: window.innerWidth , height: window.innerHeight })

    function handleResize() {
        console.log("resized!")
        setSvgSize({ width: window.innerWidth , height: window.innerHeight })
    }

    let svgContainer = useRef(null)

    let data = [ {"id": "C++", "group": 1}, {"id": "Java", "group": 1}, {"id": "JS", "group": 1}, {"id":"Python", "group": 1}, 
                {"id": "R", "group": 1}, {"id": "React", "group": 2}, {"id": "Redux", "group": 2}, {"id":"NodeJS", "group": 2}, 
                {"id": "Express", "group": 2}, {"id": "EJS", "group": 2}, {"id": "Bootstrap", "group": 2}, {"id": "MaterialUI", "group": 2}, 
                {"id": "D3", "group": 2}, {"id": "GSAP", "group": 2}, {"id": "Tensorflow", "group": 2}, {"id": "SQLite3", "group": 3}, {"id": "Mongo", "group": 3}  ]

    let dataLinks = [ 
        {"source": "C++", "target": "Java" , "value": 1 },
        {"source": "Java", "target": "JS" , "value": 1},
        {"source": "Python", "target": "C++" , "value": 1 },
        {"source": "Java", "target": "Python" , "value": 1 },
        {"source": "R", "target": "Java" , "value": 1 },
        {"source": "R", "target": "C++" , "value": 1 },
        {"source": "Python", "target": "JS" , "value": 1 },
        {"source": "JS", "target": "Express" , "value": 1 },
        {"source": "R", "target": "React" , "value": 1 },
        {"source": "Java", "target": "EJS" , "value": 1 },
        {"source": "JS", "target": "GSAP" , "value": 1 },
        {"source": "Express", "target": "D3" , "value": 1 },
        {"source": "EJS", "target": "D3" , "value": 1 },
        {"source": "React", "target": "D3" , "value": 1 },
        {"source": "GSAP", "target": "EJS", "value": 1},
        {"source": "SQLite3", "target": "D3", "value": 1 },
        {"source": "Java", "target": "SQLite3", "value": 1},
        {"source": "Mongo", "target": "GSAP", "value": 1  },
        {"source": "Mongo", "target": "JS", "value": 1}
     ]

    let hardSkills = "In addition to be going through my third year as a computer science major, I also have two year of experience developing personal projects, mainly web applications. I started programming when I was 16 years old. Since then, I have had a passion for learning new programming skills, languages, and frameworks."

    let softSkills = "I am a person who is always willing to listen and empathize with others. I have no problems working with others."

    let qualities = ["Adaptable", "Leader", "Teamwork", "Communication", "Organization" ]

    function drag(simulation) {
  
        function dragstarted(event) {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          event.subject.fx = event.subject.x;
          event.subject.fy = event.subject.y;
        }
        
        function dragged(event) {
          event.subject.fx = event.x;
          event.subject.fy = event.y;
        }
        
        function dragended(event) {
          if (!event.active) simulation.alphaTarget(0);
          event.subject.fx = null;
          event.subject.fy = null;
        }
        
        return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
    }

    function color() {
        const scale = d3.scaleOrdinal(d3.schemeCategory10);
        return d => scale(d.group);
    }

    useEffect(() => {
        
        window.addEventListener('resize', handleResize)

        const links = dataLinks.map(d => Object.create(d))
        const nodes = data.map(d => Object.create(d))

        console.log(nodes)

        const container = d3.select(svgContainer.current)  // TODO: create reference to svg
        
        const simulation = d3.forceSimulation(nodes)
            .force("link", d3.forceLink(links).id(d => d.id))
            .force("charge", d3.forceManyBody().strength( svgSize.width > 600 ? -1200 : -300 ))
            .force("center", d3.forceCenter( svgSize.width /4 , svgSize.height /3 ));

        const link = container.append("g")
            .attr("stroke", "#999")
            .attr("stroke-opacity", 0.6)
            .selectAll("line")
            .data(links)
            .join("line")
                .attr("stroke-width", d => Math.sqrt(d.value))


        const node = container.append('g')
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5)
            .selectAll("g")
            .data(nodes)
            .join("g")
            .attr("fill", color() )

        node.append("circle")
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5)
            .attr("r", svgSize.width > 400 ? 40 : 10  )
            .call(drag(simulation))

        node.append("text")
            .attr("x", -20)
            .attr("y", 5)
            .text(d => d.id)
            .attr("stroke", svgSize.width > 400 ? "black" : "white" )
            .attr("stroke-width", 1)
            .attr("font-size", svgSize.width > 400 ? "20px": "12px"  )
        
        simulation.on("tick", () => {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y)

            node
                .attr("transform", d => `translate(${d.x},${d.y})`)
                .attr("r", 0.04 * svgSize.width )
        } )

    }, [])

    return (
        <div id = "Skills" className = {styles.skillsComp}>
            <div className = {styles.skillsTitle} >Skills</div>
            <div className = {styles.intro} >{hardSkills}. {softSkills} </div>
            <svg width = { svgSize.width * 2/3 } height = { svgSize.height * 2/3} ref = { svgContainer } >
            </svg>
        </div>
    )
    
}

export default Skills

