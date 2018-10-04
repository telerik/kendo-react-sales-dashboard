import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import GridContainer from './components/GridContainer'
import PanelBarContainer from './components/PanelBarContainer'
import { DonutChartContainer }  from './components/DonutChartContainer'
import { BarChartContainer } from './components/BarChartContainer';

import { Button } from '@progress/kendo-react-buttons'
import { savePDF } from '@progress/kendo-react-pdf';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Ripple } from '@progress/kendo-react-ripple';

import '@progress/kendo-theme-material/dist/all.css'
import { Input } from '@progress/kendo-react-inputs';

class App extends Component {
    app;
    state = {
      showDialog: false
    }
    handlePDFExport = (e) =>{
      savePDF(ReactDOM.findDOMNode(this.app), { paperSize: 'auto' });
    }

    handleShare = () => {
      this.setState({
        showDialog: !this.state.showDialog
      })
    }
    render() {
        return (
          <Ripple>
            <div className="app-container" ref={(app) => this.app = app}>
                <div className="row">
                  <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                    <h1>Sales | Q4 2018</h1>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 buttons-right">
                    <Button primary={true} onClick={this.handleShare}>Share</Button>
                    <Button onClick={this.handlePDFExport}>Export to PDF</Button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <PanelBarContainer/>
                  </div>
                  <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                    <div className="row">
                      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <DonutChartContainer/>
                      </div>
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                        <div className="percentage-container">
                          <span className="percentage-number">94</span>
                          <span className="percentage-sign">%</span>
                          <p>CUSTOMER SATISFACTION</p>
                        </div>
                        <div className="percentage-container">
                          <span className="percentage-number">89</span>
                          <span className="percentage-sign">%</span>
                          <p>TARGET SALES</p>
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <BarChartContainer/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <GridContainer/>
                      </div>
                    </div>
                  </div>
                </div>
                {this.state.showDialog && <Dialog title={"Share this report"} onClose={this.handleShare}>
                  <p>Please enter the email address/es of the recipient/s.</p>
                  <Input placeholder="example@progress.com"/>
                  <DialogActionsBar>
                    <Button primary={true} onClick={this.handleShare}>Share</Button>
                    <Button onClick={this.handleShare}>Cancel</Button>
                  </DialogActionsBar>
                </Dialog>}
            </div>
          </Ripple>
        );
    }
}

export default App;
