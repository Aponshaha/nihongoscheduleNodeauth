import React from 'react'
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop , Timezone } from '@syncfusion/ej2-react-schedule';
import { loadCldr,extend } from '@syncfusion/ej2-base';
// import * as numberingSystems from '../numberingSystems.json';
// import * as gregorian from '../ca-gregorian.json';
// import * as numbers from '../numbers.json';
// import * as timeZoneNames from '../timeZoneNames.json';
// loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);
//import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as dataSource from '../datasource.json';

export class ViewComponent extends React.Component {
  constructor() {
    super(...arguments);
    this.timezone = new Timezone();
    //this.data = extend([], dataSource.scheduleData, null, true);
    this.state = {
      data:[],
      res:[],
    }
  }
  componentDidMount() {
    fetch('https://gitscheduleapp.herokuapp.com/api/groups')
      .then(response => response.json())
      .then(res => this.setState({ data: res }, ()=>{
        console.log(this.state.data)                       //api Data
        
      }));
      
  }
  // componentDidUpdate(props){
  //   if(this.props.data != this.res){
  //     this.data=this.res;
  //     console.log(this.data,'component did mount ')
  //   }
  // }
  change(args) {
    this.scheduleObj.selectedDate = args.value;
    this.scheduleObj.dataBind();
  }
  onDragStart(args) {
    args.navigation.enable = true;
  }
  render() {
    return (<div className='schedule-control-section'>
      <div className='col-lg-9 control-section'>
        <div className='control-wrapper'>
          <ScheduleComponent height='650px' ref={schedule => this.scheduleObj = schedule}
            selectedDate={new Date()} readonly={true}
            eventSettings={{ dataSource: this.state.data}} //Calander dATA
            dragStart={(this.onDragStart.bind(this))} >
            <ViewsDirective>
              <ViewDirective option='Day' startHour='09:00' endHour='19:00' />
              <ViewDirective option='Week' startHour='09:00' endHour='19:00' />
              <ViewDirective option='WorkWeek' startHour='09:00' endHour='19:00' />
              <ViewDirective option='Month' />

            </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
          </ScheduleComponent>
        </div>
      </div>

    </div>);
  }
}

