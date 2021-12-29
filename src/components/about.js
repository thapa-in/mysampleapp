import React from 'react';

export class About extends React.Component{
    constructor (props){
        super(props);

        this.state={
            items:[],
            DataisLoaded:false
        };
    }

    componentDidMount(){
        fetch("http://basicapi.thapa.in/api/basicsite/bypageno/dipika/1/true")
        .then((res) => res.json())
        .then((json)=>{
            this.setState({
             items:json,
             DataisLoaded:true
            });
        })
    }

    render(){
        const {DataisLoaded, items}=this.state;
        if(!DataisLoaded) return <div>...</div>;

        return(
            <>
            {
                items.map((item)=>(
                    <ol key={item.id}>
                            {item.heading}
                    </ol>
                ))
            }
            </>
        )

    }





}