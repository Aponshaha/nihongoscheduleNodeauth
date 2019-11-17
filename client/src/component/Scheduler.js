import React, { Component } from 'react'

import { ScheduleComponent, Inject, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop, ViewsDirective, ViewDirective, ExcelExport, Print } from '@syncfusion/ej2-react-schedule';
import * as dataSource from '../datasource.json';
import { L10n } from '@syncfusion/ej2-base';


L10n.load({
  'en-US': {
    'schedule': {
      'saveButton': 'Save',
      'cancelButton': 'Close',
      'deleteButton': 'Remove',
      'newEvent': 'Add Class',
    },
  }
});
export class ScheduleComponent1 extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      data: [],
      res: [],
      serverData: []
    }
  }
  onActionBegin(args) {
    if (args.requestType === 'toolbarItemRendering') {

      let exportIt = {
        align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-excel-export',
        text: ' Save', cssClass: 'e-excel-export', click: this.onExportDataClick.bind(this)
      };
      let exportItem = {
        align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-excel-export',
        text: 'Print', cssClass: 'e-excel-export', click: this.onExportClick.bind(this)
      };
      let deletbtn = {
        align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-excel-export',
        text: 'Delete', cssClass: 'e-excel-export', click: this.onDelete.bind(this)
      };

      args.items.push(exportItem);
      args.items.push(exportIt);
      args.items.push(deletbtn);



    }
  }
  //adding color to events
  onEventRendered(args) {
    let categoryColor = args.data.CategoryColor;

    console.log(categoryColor, 'categoryColor');


  }
  



  // componentDidMount() {
  //   fetch('https://gitscheduleapp.herokuapp.com/api/groups')
  //     .then(response => response.json())
  //     .then(res => this.setState({ data: res }, () => {
  //       console.log(this.state.data, 'get data')
  //     }));

  // }
  change(args) {
    this.scheduleObj.selectedDate = args.value;
    this.scheduleObj.dataBind();
  }
  onDragStart(args) {
    args.navigation.enable = true;
  }
  onExportClick() {
    let exportValues = {
      fields: ['Id', 'Subject', 'StartTime', 'EndTime', 'Location', 'Description']
    };
    this.scheduleObj.print(exportValues)
    console.log(this.scheduleObj.eventsData)



  }


  onExportDataClick() {

    console.log(this.state.data, 'Onexportdata')
    fetch('https://gitscheduleapp.herokuapp.com/api/group', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.data),
    }).then((response) => response.json())
      .then((responseJson) => {

        // this.setState({serverData: responseJson.data}, ()=>{console.log("server data: ", this.state.serverData)})
        // return responseJson.data;
      })
      .catch((error) => {
        console.error(error);
      })

     //console.log(JSON.stringify(this.state.data))

  }
  onDelete() {

    console.log( 'delete')
    

  }

  render() {
    return (<div className='schedule-control-section'>
      <div className='col-lg-9 control-section'>
        <div className='control-wrapper'>
          <ScheduleComponent height='650px' cssClass='excel-export' width='100%'
            id='schedule' ref={schedule => this.scheduleObj = schedule}
            selectedDate={new Date()} showWeekNumber={true} eventSettings={{ dataSource: this.state.data }}
            actionBegin={this.onActionBegin.bind(this)} dragStart={(this.onDragStart.bind(this))}
            eventRendered={this.onEventRendered.bind(this)}
      


          >
            <ViewsDirective>
              <ViewDirective option='Day' startHour='09:00' endHour='19:00' />
              <ViewDirective option='Week' startHour='09:00' endHour='19:00' />
              <ViewDirective option='WorkWeek' />
              <ViewDirective option='Month' />
            </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop, Print]} />
          </ScheduleComponent>
        </div>
      </div>
      <div className='col-lg-3 property-section'>

      </div>
    </div>);
  }

}

export default ScheduleComponent1