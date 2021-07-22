import DataTable from "react-data-table-component";



const columns = [
    {
      name: "Year",
      selector: "year",
      sortable: true
    },
    {
      name: "Revenue",
      selector: "revenue",
      sortable: true
    },
    {
      name: "Gross Margin",
      selector: "grossMargin",
      sortable: true,
    },
    {
        name: "Profit",
        selector: "profit",
        sortable: true,
    }
  ];


  const years = [
      {
          year:"2020",
          revenue:"3000000",
          grossMargin:'400000',
          profit:'250000'

      },
      {
        year:"2021",
        revenue:"3090000",
        grossMargin:'480000',
        profit:'257500'

    }, {
        year:"2022",
        revenue:"3862000",
        grossMargin:'489600',
        profit:'360500'

    }
  ];



const Slide4 = () =>{



    return(
        <div className="card card-custom">
            <h5 className="card-title p-1 card-title-custom">Income Statment</h5>
            <div className="card-body p-0">
                <DataTable
                    columns={columns}
                    data={years}
                    defaultSortField="title"
                />
            </div>
        </div>);

}



export default Slide4;