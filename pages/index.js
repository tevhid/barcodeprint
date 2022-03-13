import $ from "jquery";
import { useEffect, useState } from "react";
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';
import data from 'data/products.json';


export default function Home() {

  const [gridData, setGridData] = useState(data);
  const [dataState, setDataState] = useState({ skip: 0, take: 20 });
  const handleDataStateChange = (e) => {
      setDataState(e.data)
  }

  useEffect(() => {
    

  }, [])
  


  return (
    <>
      <div className="container mx-auto h-screen">
        <div className="mx-auto h-full justify-center text-center">
          <div className="flex mx-auto justify-center">
           <Grid data={gridData}
                sortable
                onDataStateChange={handleDataStateChange}
                total={data.length}
                {...dataState}>
                <Column field="ProductID" title="ID" filterable={false} editable={false}/>
                <Column field="ProductName" title="Name" />
                <Column field="UnitPrice" title="Price" filter='numeric' editor='numeric' />
                <Column field="UnitsInStock" title="In stock" filter='numeric'  editor='numeric' />
            </Grid>
           
          </div>
        </div>
      </div>       
                

    </>
  )
}
