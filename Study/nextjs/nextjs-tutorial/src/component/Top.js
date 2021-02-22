import { Component } from "react";
import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default class Top extends Component {
    render(){
        return(
            <div>
                <img src="/images/coding.jpeg"></img>
                <Header as="h1">Next.js</Header>
                <Gnb></Gnb>
            </div>

        )
    }

}