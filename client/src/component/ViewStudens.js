import MaterialTable from 'material-table';
import React, { useEffect } from 'react';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Stuff Id', field: 'stuff_id' },
      { title: 'email', field: 'email' },
      {
        title: 'Status ',
        field: 'status',

        lookup: { 1: 'Active', 0: 'Inactive' }
      },

      {
        title: 'Section ',
        field: 'group',

        lookup: { 1: 'class 1', 2: 'class 2', 3: 'class 3', 4: 'class 4', 5: 'class 5', 6: 'class 6', 7: 'class 2A', 8: 'class 2B', 9: 'class 3A', 10: 'class 4A' }
      },
    ],
    data: [
      { name: 'Mehmet', stuffid: 'k1234567', email: 'a@athuman', group: 'student' },
      {
        name: 'Zerya Betül',
        stuffid: 'k123456',
        email: 'b@athuman',
        group: 'teacher',
      },
    ],
  });

  //   componentDidMount = () =>{
  //     fetch('http://gitscheduleapp.herokuapp.com/api/users')
  //     .then(response => response.json())
  //     .then(user => {
  //         this.setState({data: user, loading: false},()=>{console.log('state',this.state.data);
  //         })
  //     } )
  //   }

  useEffect(() => {
    fetch('http://gitscheduleapp.herokuapp.com/api/users')
      .then(response => response.json())
      .then(user => {
        //this.setState({data: user, loading: false},()=>{console.log('state',this.state.data);
        // })

        let newData = { ...state }
        newData.data = user
        const items = user.map((item, key) => { item.group = '1' }
        )
        console.log(newData.data, items);
        const sections = user.map((r, i) => { r.status = '1' });
        setState(newData)
       



      })
  }, []);


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
              data.forEach((element, index) => {
                if (JSON.stringify(element, ["name", "stuff_id", "email", "group", "status"]) === JSON.stringify(oldData, ["name", "stuff_id", "email", "group", "status"])) {
                  updateAt = index
                }
              })
              data[updateAt] = newData;
              setState({ ...state, data });
            }, 600);
          })

      }}
    />
  );
}
