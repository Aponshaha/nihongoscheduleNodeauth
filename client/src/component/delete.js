import React, { useEffect } from 'react';
import MaterialTable from 'material-table';

export default function DeleteTable() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'Subject' },
            { title: 'Discription', field: 'Description' },
            { title: 'StartTime', field: 'StartTime' },
            { title: 'End Time', field: 'EndTime' },
            

        ],
        data: [

        ],
    });

    useEffect(() => {
        fetch('http://gitscheduleapp.herokuapp.com/api/groups')
            .then(response => response.json())
            .then(group => {
                //this.setState({data: user, loading: false},()=>{console.log('state',this.state.data);
                // })

                let newData = { ...state }
                newData.data = group
                // const items = group.map((item, key) => { item.group = '1' }
                // )
                console.log('delete');
                //const sections = group.map((r, i) => { r.status = '1' });
                setState(newData)
                console.log(state.data,'useaffect ');
                
            })
    }, []);

    const onDelete = (id) => {
        fetch(`http://gitscheduleapp.herokuapp.com/api/group/${id}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
        })
            .then(res => res.json())

            .then(res => console.log('Data Deleted ', res))
        
        

        //setState(state.data)
        
        //window.location.reload()


        //console.log(state.data,'state data after deletation ');

    }



    return (
        <MaterialTable
            title="Editable Example"
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data.push(newData);
                            setState({ ...state, data });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            let updateAt = -1
                            data.forEach((value, index) => {
                                if (JSON.stringify(value, ["Subject", "StartTime", "EndTime","Description"])
                                    === JSON.stringify(oldData, ["Subject", "StartTime", "EndTime","Description"])) { updateAt = index }
                            })
                            data[updateAt] = newData;
                            setState({ ...state, data })
                        }, 600);
                    }),
                onRowDelete: (oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            onDelete(oldData._id)
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data]
                                data.splice(data.indexOf(1), 1)
                                return { ...prevState, data }

                            })
                            //console.log(oldData._id);                            
                        }, 600);
                    }),

            }}
        />
    );
}