const CategorySubcategoryStyleKTablePrint = ({ formData, index, quantity_multiplier }) => {
  const { categories, subcategories, planTypes, unit, rate, specification, percentageMarket } = formData || {};
  const {carpetArea} = formData;
  return (
    <div>
      <div className="container" style={{ marginTop: index === 0 ? '30px' : '10px'}}>
        {index === 0 && <h2>Final Result</h2>}
        <table className="table table-striped text-center">
          {index === 0 && (
            <thead>
              <tr>
                {/* <th scope="col">Current Date</th> */}
                <th scope="col" style={{backgroundColor:'#e6c300', color:'#0d0d0d' }}>Sr No</th>
                <th scope="col" style={{backgroundColor:'#e6c300', color:'#0d0d0d' }}>Work Category</th>
                <th scope="col" style={{backgroundColor:'#e6c300', color:'#0d0d0d' }}>Sub Category</th>
                <th scope="col" style={{backgroundColor:'#e6c300', color:'#0d0d0d' }}>Plan Type</th>
                <th scope="col" style={{backgroundColor:'#e6c300', color:'#0d0d0d' }}>Unit</th>
                {/* <th scope="col" style={{backgroundColor:'#e6c300', color:'#0d0d0d' }}>Total Sqft</th> */}
                <th scope="col" style={{backgroundColor:'#e6c300', color:'#0d0d0d' }}>Rate</th>
                <th scope="col" style={{backgroundColor:'#e6c300', color:'#0d0d0d' }}>Price</th> 
                <th scope="col" style={{backgroundColor:'#e6c300', color:'#0d0d0d' }}>Specification</th>
                <th scope="col" className="DeletePartExclude" style={{backgroundColor:'#e6c300', color:'#0d0d0d' }}>Delete</th>
              </tr>
            </thead>
          )}
          <tbody>
            <tr>
              {/* <td className="align-middle" style={{ width: '100px' }}>{new Date().toISOString().slice(0, 10)}</td> */}
              <td className="align-middle" style={{ width: '50px' }}>{index + 1}</td>
              <td className="align-middle" style={{ width: '100px' }}>{categories}</td>
              <td className="align-middle" style={{ width: '100px' }}>{subcategories}</td>
              <td className="align-middle" style={{ width: '100px'}}>{planTypes}</td>
              <td className="align-middle" style={{ width: '50px' }}>{unit}</td>
              {/* <td className="align-middle" style={{ width: '100px' }}>{total_sqft}</td> */}
              <td className="align-middle" style={{ width: '100px' }}>{rate}</td>
              <td className="align-middle " style={{ width: '50px' }}>{carpetArea*percentageMarket*rate}{console.log("Percentage Market:", percentageMarket)}</td>{/*let do the local part here, price *= {carpetArea*percentageMarket*rate}{console.log("Percentage Market:", percentageMarket)}*/}
              <td className="align-middle" style={{ width: '200px' }}>{specification}</td>
              <td className="align-middle DeletePartExclude" style={{ width: '70px'}}><input type="checkbox"/></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategorySubcategoryStyleKTablePrint;
