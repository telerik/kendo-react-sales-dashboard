import React from 'react';
import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';
export default class PanelBarContainer extends React.Component {
    imageUrl(imageName) {
        return "img/" + imageName + '.jpg';
    }

    handleItemClick = (element) => {
        document.getElementById(this.props.activeItem).classList.remove("k-state-selected")
        this.props.changeData(element)
    }

    componentDidUpdate(){
        document.getElementById(this.props.activeItem).classList.add("k-state-selected")
    }
    render(){
        return (
                <PanelBar >
                    <PanelBarItem expanded={true} title="Teammates">
                        <div>
                            <div className="teamMate k-state-selected" id="Andrew Fuller" onClick={(e) =>{ this.handleItemClick("Andrew Fuller")}}>
                                <img src={this.imageUrl('andrew')} alt="Andrew Fuller" />
                                <span className="mate-info">
                                    <h2>Andrew Fuller</h2>
                                    <p>Team Lead</p>
                                </span>
                            </div>
                            <div className="teamMate" id="Nancy Leverling" onClick={() => this.handleItemClick("Nancy Leverling")}>
                                <img src={this.imageUrl('nancy')} alt="Nancy Leverling" />
                                <span className="mate-info">
                                    <h2>Nancy Leverling</h2>
                                    <p>Sales Associate</p>
                                </span>
                            </div>
                            <div className="teamMate" id="Robert King" onClick={() => this.handleItemClick("Robert King")}>
                                <img src={this.imageUrl('robert')} alt="Robert King" />
                                <span className="mate-info">
                                    <h2>Robert King</h2>
                                    <p>Business System Analyst</p>
                                </span>
                            </div>
                            <div className="teamMate" id="Laurence Lebihan" onClick={() => this.handleItemClick("Laurence Lebihan")}>
                                <img src={this.imageUrl('laurence')} alt="Laurence Lebihan" />
                                <span className="mate-info">
                                    <h2>Laurence Lebihan</h2>
                                    <p>Accounting Manager</p>
                                </span>
                            </div>
                            <div className="teamMate" id="Mary Saveley" onClick={() => this.handleItemClick("Mary Saveley")}>
                                <img src={this.imageUrl('mary')} alt="Mary Saveley" />
                                <span className="mate-info">
                                    <h2>Mary Saveley</h2>
                                    <p>Sales Agent</p>
                                </span>
                            </div>
                            <div className="teamMate" id="Hari Kumar" onClick={() => this.handleItemClick("Hari Kumar")}>
                                <img src={this.imageUrl('hari')} alt="Hari Kumar" />
                                <span className="mate-info">
                                    <h2>Hari Kumar</h2>
                                    <p>Sales Manager</p>
                                </span>
                            </div>
                        </div>
                    </PanelBarItem>
                    <PanelBarItem title={'Sales Reports'} >
                        <div className="project-item" id="Q1 Sales" onClick={() => this.handleItemClick("Q1 Sales")}>Q1 Sales</div>
                        <div className="project-item" id="Q2 Sales" onClick={() => this.handleItemClick("Q2 Sales")}>Q2 Sales</div>
                        <div className="project-item" id="Q3 Sales" onClick={() => this.handleItemClick("Q3 Sales")}>Q3 Sales</div>
                        <div className="project-item" id="Q4 Sales" onClick={() => this.handleItemClick("Q4 Sales")}>Q4 Sales</div>
                    </PanelBarItem>
                    <PanelBarItem title="Sales by Day">
                        <div className="project-item" id="Monday" onClick={() => this.handleItemClick("Monday")}>Monday</div>
                        <div className="project-item" id="Tuesday" onClick={() => this.handleItemClick("Tuesday")}>Tuesday</div>
                        <div className="project-item" id="Wednesday" onClick={() => this.handleItemClick("Wednesday")}>Wednesday</div>
                        <div className="project-item" id="Thursday" onClick={() => this.handleItemClick("Thursday")}>Thursday</div>
                        <div className="project-item" id="Friday" onClick={() => this.handleItemClick("Friday")}>Friday</div>
                    </PanelBarItem>
                </PanelBar>
        );
    }
}