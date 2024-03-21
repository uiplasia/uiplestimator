const CategorySubcategoryStyleKTablePrint = ({ formData, index, quantity_multiplier }) => {
  const { categories, subcategories, planTypes, unit, total_sqft, rate,price, specification} = formData || {};

  return (
    <div>
      <div className="container" style={{ marginTop: index === 0 ? '30px' : '10px'}}>
        {index === 0 && <h2>Final Result</h2>}
        <table className="table table-striped text-center">
          {index === 0 && (
            <thead>
              <tr>
                <th scope="col">Current Date</th>
                <th scope="col">Sr No</th>
                <th scope="col">Work Category</th>
                <th scope="col">Sub Category</th>
                <th scope="col">Plan Type</th>
                <th scope="col">Unit</th>
                <th scope="col">Total Sqft</th>
                <th scope="col">Rate</th>
                <th scope="col">Price</th>
                <th scope="col">Specification</th>
              </tr>
            </thead>
          )}
          <tbody>
            <tr>
              <td className="align-middle" style={{ width: '100px' }}>{new Date().toISOString().slice(0, 10)}</td>
              <td className="align-middle" style={{ width: '50px' }}>{index + 1}</td>
              <td className="align-middle" style={{ width: '100px' }}>{categories}</td>
              <td className="align-middle" style={{ width: '100px' }}>{subcategories}</td>
              <td className="align-middle" style={{ width: '100px', maxWidth:'100px'}}>{planTypes}</td>
              <td className="align-middle" style={{ width: '100px' }}>{unit}</td>
              <td className="align-middle" style={{ width: '100px' }}>{total_sqft}</td>
              <td className="align-middle" style={{ width: '100px' }}>{rate}</td>
              <td className="align-middle" style={{ width: '100px' }}>{price}</td>
              <td className="align-middle" style={{ width: '100px' }}>{specification}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategorySubcategoryStyleKTablePrint;
