import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaBeer,FaShuttleVan} from 'react-icons/fa'
import Title from './Title'


export default class Services extends Component {
state={
    services:[
        
        {
        icon:<FaCocktail/>,
        title:"free cocktails",
        info:"lorem jwdw wedwed inljwd dweldk lmas athapahtu kama nialan nanadana amauthuamaikw sewwamdo ajapathah"},

        {
            icon:<FaShuttleVan/>,
            title:"free Shuttle Vans",
            info:"lorem jwdw wedwed inljwd dweldk lmas athapahtu kama nialan nanadana amauthuamaikw sewwamdo ajapathah"},

            {
                icon:<FaBeer/>,
                title:"Strong and Cool Beer",
                info:"lorem jwdw wedwed inljwd dweldk lmas athapahtu kama nialan nanadana amauthuamaikw sewwamdo ajapathah"},
                {
                    icon:<FaHiking/>,
                    title:"Awesome Hiking",
                    info:"lorem jwdw wedwed inljwd dweldk lmas athapahtu kama nialan nanadana amauthuamaikw sewwamdo ajapathah"}
    
]
}

    render() {
        return (
            <>
                 <section className="services">
                    <Title title="services" />
                    <div className="services-center">
                        {this.state.services.map((service,index)=>{
                            return(<article key={index} className="service">
                                <span>{service.icon}</span>
                                <h6>{service.title}</h6>
                                <p>{service.info}</p>
                            </article>)
                            
                        })}
                        </div>
                    </section>
            </>
        )
    }
}
