import { Component } from "react";
import { Grid, Image } from 'semantic-ui-react'

export default class ItemList extends Component {
    render(){
        const list = this.props.list;

        return(
            <div>
                <Grid columns={3}>
                    <Grid.Row>
                    {list.map((item) =>{
                        <Grid.Column key={item.id}>
                            <Image src={item.image_link} />
                        </Grid.Column>
                    })}
                    </Grid.Row>                    
                </Grid>

            </div>
        )
    }
}