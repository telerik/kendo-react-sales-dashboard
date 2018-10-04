import React from 'react';
import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';
export default class PanelBarContainer extends React.Component {
    imageUrl(imageName) {
        return "img/" + imageName + '.jpg';
    }
    render(){
        return (
                <PanelBar >
                    <PanelBarItem expanded={true} title="My Teammates">
                        <div>
                            <div className="teamMate">
                                <img src={this.imageUrl('andrew')} alt="Andrew Fuller" />
                                <span className="mate-info">
                                    <h2>Andrew Fuller</h2>
                                    <p>Team Lead</p>
                                </span>
                            </div>
                            <div className="teamMate">
                                <img src={this.imageUrl('nancy')} alt="Nancy Leverling" />
                                <span className="mate-info">
                                    <h2>Nancy Leverling</h2>
                                    <p>Sales Associate</p>
                                </span>
                            </div>
                            <div className="teamMate">
                                <img src={this.imageUrl('robert')} alt="Robert King" />
                                <span className="mate-info">
                                    <h2>Robert King</h2>
                                    <p>Business System Analyst</p>
                                </span>
                            </div>
                            <div className="teamMate">
                                <img src={this.imageUrl('laurence')} alt="Laurence Lebihan" />
                                <span className="mate-info">
                                    <h2>Laurence Lebihan</h2>
                                    <p>Accounting Manager</p>
                                </span>
                            </div>
                            <div className="teamMate">
                                <img src={this.imageUrl('mary')} alt="Mary Saveley" />
                                <span className="mate-info">
                                    <h2>Mary Saveley</h2>
                                    <p>Sales Agent</p>
                                </span>
                            </div>
                            <div className="teamMate">
                                <img src={this.imageUrl('hari')} alt="Hari Kumar" />
                                <span className="mate-info">
                                    <h2>Hari Kumar</h2>
                                    <p>Sales Manager</p>
                                </span>
                            </div>
                        </div>
                    </PanelBarItem>
                    <PanelBarItem title={'Projects'} >
                        <PanelBarItem title={'New Business Plan'} />
                        <PanelBarItem title={'Sales Forecasts'}  >
                            <PanelBarItem title={'Q1 Forecast'} />
                            <PanelBarItem title={'Q2 Forecast'} />
                            <PanelBarItem title={'Q3 Forecast'} />
                            <PanelBarItem title={'Q4 Forecast'} />
                        </PanelBarItem >
                        <PanelBarItem title={'Sales Reports'} />
                    </PanelBarItem>
                    <PanelBarItem title="Programs">
                        <PanelBarItem title="Monday" />
                        <PanelBarItem title="Tuesday" />
                        <PanelBarItem title="Wednesday" />
                        <PanelBarItem title="Thursday" />
                        <PanelBarItem title="Friday" />
                    </PanelBarItem>
                    <PanelBarItem title="Communication" disabled={true} />
                </PanelBar>
        );
    }
}